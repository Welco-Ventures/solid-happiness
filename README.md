# Limitless Equipment Sourcing

This branch adds a small Node/Express server and Stripe Checkout integration. It serves a static frontend from public/ and exposes two endpoints:

- POST /create-checkout-session — creates a Stripe Checkout Session
- POST /webhook — receives Stripe webhooks (verify signature with STRIPE_WEBHOOK_SECRET)

Files added on branch `add-stripe-checkout`:
- package.json
- server.js
- public/index.html
- public/success.html
- public/cancel.html
- .gitignore

Setup (local):
1. Install dependencies
   npm install

2. Create a .env file in the project root (do NOT commit):

STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
BASE_URL=http://localhost:3000

3. Run the server (dev):
   npm run dev

4. Visit http://localhost:3000 and click the Pay button to test Stripe Checkout.

Testing webhooks locally:
- Use ngrok: ngrok http 3000
- Add a webhook endpoint in the Stripe Dashboard using your ngrok URL + /webhook
- Copy the webhook signing secret into STRIPE_WEBHOOK_SECRET

Production:
- Use live keys and HTTPS. Update STRIPE_* variables accordingly.
- Implement order fulfillment in server.js where indicated.

If you want, I can open a pull request with this branch and iterate further (add product listing pages, persist orders to a DB, integrate emails, or adjust the frontend to match the existing full-site HTML).