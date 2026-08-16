require('dotenv').config();
const express = require('express');
const path = require('path');
const Stripe = require('stripe');

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY not set. Checkout will fail until you add it to .env');
}

const stripe = Stripe(process.env.STRIPE_SECRET_KEY || '');

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Use JSON for normal routes
app.use(express.json());

// Create a Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;
    // Example: single item fallback
    const item = (items && items[0]) || { name: 'Equipment Search Fee', amount: 10000, quantity: 1, currency: 'usd' };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: item.currency || 'usd',
            product_data: { name: item.name || 'Equipment' },
            unit_amount: item.amount || 10000,
          },
          quantity: item.quantity || 1,
        },
      ],
      success_url: `${process.env.BASE_URL || `http://localhost:${port}`}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL || `http://localhost:${port}`}/cancel.html`,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('create-checkout-session error', err);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

// Stripe webhook endpoint requires raw body to verify signature
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.warn('STRIPE_WEBHOOK_SECRET is not set. Skipping signature verification.');
  }

  let event;

  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } else {
      // If no webhook secret provided, parse the body (not secure) — used only for local testing
      event = JSON.parse(req.body.toString());
    }
  } catch (err) {
    console.error('Webhook error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle events
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment succeeded for session:', session.id);
      // TODO: fulfill order — save to DB, send email, etc.
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }

  res.json({ received: true });
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
