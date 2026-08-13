# Limitless-Logististic
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Limitless Equipment Sourcing, LLC | We Can Source It</title>

  <meta
    name="description"
    content="Limitless Equipment Sourcing, LLC helps customers source engines, transmissions, heavy equipment, industrial equipment and parts. Call or WhatsApp Fabian at 352-722-4353."
  >

  <meta name="theme-color" content="#111111">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #151515;
      background: #ffffff;
      line-height: 1.6;
    }

    a {
      text-decoration: none;
    }

    /* =========================
       NAVIGATION
    ========================= */

    .nav {
      position: sticky;
      top: 0;
      z-index: 1000;

      display: flex;
      align-items: center;
      gap: 25px;

      padding: 16px 5%;

      background: #111111;
      color: #ffffff;

      box-shadow: 0 2px 12px rgba(0,0,0,0.25);
    }

    .brand {
      font-weight: 900;
      letter-spacing: 0.05em;
      white-space: nowrap;
    }

    .brand span {
      display: block;
      font-size: 10px;
      letter-spacing: 0.18em;
      color: #bbbbbb;
    }

    .nav-links {
      display: flex;
      gap: 22px;
      margin-left: auto;
    }

    .nav-links a {
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
    }

    .nav-links a:hover {
      color: #e31b23;
    }

    /* =========================
       BUTTONS
    ========================= */

    .btn {
      display: inline-block;

      padding: 14px 22px;

      background: #d71920;
      color: #ffffff;

      font-weight: 800;
      border-radius: 5px;

      transition: 0.2s ease;
    }

    .btn:hover {
      background: #a90008;
      transform: translateY(-1px);
    }

    .btn-outline {
      background: transparent;
      border: 2px solid #ffffff;
    }

    .btn-outline:hover {
      background: #ffffff;
      color: #111111;
    }

    /* =========================
       HERO
    ========================= */

    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;

      min-height: 650px;

      background: #171717;
      color: #ffffff;
    }

    .hero-content {
      padding: 90px 8%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .eyebrow {
      color: #e21b23;

      font-size: 12px;
      font-weight: 900;

      letter-spacing: 0.2em;

      margin-bottom: 15px;
    }

    .hero h1 {
      font-size: clamp(55px, 8vw, 105px);
      line-height: 0.9;

      margin-bottom: 25px;
    }

    .hero-description {
      max-width: 650px;

      font-size: 20px;

      color: #dddddd;

      margin-bottom: 30px;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;

      margin-bottom: 25px;
    }

    .contact-line {
      font-weight: 800;
      color: #ffffff;
    }

    .hero-image {
      min-height: 650px;
    }

    .hero-image img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      display: block;
    }

    /* =========================
       TRUST BAR
    ========================= */

    .trust-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      background: #d71920;
      color: #ffffff;
    }

    .trust-item {
      text-align: center;

      padding: 25px;

      border-right: 1px solid rgba(255,255,255,0.3);
    }

    .trust-item strong {
      display: block;
      font-size: 22px;
    }

    .trust-item span {
      font-size: 14px;
    }

    /* =========================
       GENERAL SECTIONS
    ========================= */

    .section {
      max-width: 1300px;

      margin: auto;

      padding: 85px 7%;
    }

    .section h2 {
      font-size: 48px;
      line-height: 1.05;

      margin-bottom: 35px;
    }

    /* =========================
       SERVICE CARDS
    ========================= */

    .cards {
      display: grid;

      grid-template-columns: repeat(4, 1fr);

      gap: 18px;
    }

    .card {
      border: 1px solid #dddddd;

      padding: 30px;

      min-height: 220px;

      background: #ffffff;

      transition: 0.2s ease;
    }

    .card:hover {
      transform: translateY(-5px);

      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    }

    .card h3 {
      font-size: 22px;

      margin-bottom: 15px;
    }

    .card p {
      color: #555555;

      margin-bottom: 20px;
    }

    .card span {
      color: #d71920;

      font-size: 12px;

      font-weight: 900;

      letter-spacing: 0.08em;
    }

    /* =========================
       EQUIPMENT SECTION
    ========================= */

    .equipment-section {
      display: grid;

      grid-template-columns: 1.2fr 1fr;

      background: #111111;

      color: #ffffff;
    }

    .equipment-image img {
      width: 100%;
      height: 100%;

      min-height: 500px;

      object-fit: cover;

      display: block;
    }

    .equipment-content {
      padding: 85px 8%;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .equipment-content h2 {
      font-size: 52px;

      line-height: 1;

      margin-bottom: 25px;
    }

    .equipment-content p {
      font-size: 19px;

      color: #dddddd;

      margin-bottom: 30px;
    }

    /* =========================
       SOURCING CATEGORIES
    ========================= */

    .category-grid {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      gap: 12px;
    }

    .category {
      padding: 20px;

      background: #f1f1f1;

      font-weight: 800;

      border-left: 4px solid #d71920;
    }

    .important-note {
      margin-top: 25px;

      padding: 20px;

      background: #f8f8f8;

      border-left: 4px solid #d71920;

      color: #555555;
    }

    /* =========================
       PROCESS
    ========================= */

    .process {
      background: #f7f7f7;

      max-width: none;

      padding-left: 12%;
      padding-right: 12%;
    }

    .process-list {
      counter-reset: process;

      list-style: none;

      display: grid;

      grid-template-columns: repeat(5, 1fr);

      gap: 20px;
    }

    .process-list li {
      position: relative;

      background: #ffffff;

      padding: 30px 22px;

      border-top: 5px solid #d71920;

      box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    }

    .process-number {
      display: block;

      color: #d71920;

      font-size: 32px;

      font-weight: 900;

      margin-bottom: 10px;
    }

    .process-list strong {
      display: block;

      font-size: 18px;

      margin-bottom: 10px;
    }

    /* =========================
       QUOTE SECTION
    ========================= */

    .quote-section {
      display: grid;

      grid-template-columns: 2fr 1fr;

      gap: 50px;

      padding: 80px 8%;

      background: #d71920;

      color: #ffffff;
    }

    .quote-section .eyebrow {
      color: #ffffff;
    }

    .quote-section h2 {
      font-size: 52px;

      line-height: 1;

      margin-bottom: 20px;
    }

    .quote-section p {
      font-size: 18px;

      max-width: 750px;

      margin-bottom: 25px;
    }

    .quote-contact {
      align-self: center;

      padding: 30px;

      border: 2px solid rgba(255,255,255,0.5);

      text-align: center;
    }

    .quote-contact small {
      display: block;

      margin-bottom: 10px;
    }

    .quote-contact a {
      display: block;

      color: #ffffff;

      font-size: 30px;

      font-weight: 900;

      margin-bottom: 10px;
    }

    /* =========================
       FAQ
    ========================= */

    .faq {
      max-width: 1000px;
    }

    .faq h2 {
      margin-bottom: 25px;
    }

    details {
      border-bottom: 1px solid #dddddd;

      padding: 20px 0;
    }

    summary {
      cursor: pointer;

      font-weight: 800;

      font-size: 18px;
    }

    details p {
      margin-top: 12px;

      color: #555555;
    }

    /* =========================
       FOOTER
    ========================= */

    footer {
      background: #111111;

      color: #ffffff;

      text-align: center;

      padding: 55px 7%;
    }

    footer .brand {
      margin-bottom: 15px;
    }

    footer p {
      margin-bottom: 10px;
    }

    .footer-tagline {
      font-weight: 800;

      font-size: 18px;
    }

    .legal {
      max-width: 900px;

      margin: 25px auto 0;

      color: #888888;

      font-size: 12px;

      line-height: 1.6;
    }

    /* =========================
       MOBILE
    ========================= */

    @media (max-width: 1000px) {

      .nav {
        flex-wrap: wrap;
      }

      .nav-links {
        order: 3;

        width: 100%;

        justify-content: center;

        overflow-x: auto;

        padding-top: 10px;
      }

      .hero {
        grid-template-columns: 1fr;
      }

      .hero-content {
        padding: 70px 7%;
      }

      .hero-image {
        min-height: 400px;
      }

      .cards {
        grid-template-columns: repeat(2, 1fr);
      }

      .process-list {
        grid-template-columns: repeat(2, 1fr);
      }

      .equipment-section {
        grid-template-columns: 1fr;
      }

      .quote-section {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 650px) {

      .nav {
        padding: 15px 4%;
      }

      .brand {
        font-size: 14px;
      }

      .nav > .btn {
        margin-left: auto;
      }

      .hero h1 {
        font-size: 58px;
      }

      .hero-description {
        font-size: 17px;
      }

      .section {
        padding: 65px 6%;
      }

      .section h2 {
        font-size: 38px;
      }

      .cards,
      .category-grid,
      .process-list,
      .trust-bar {
        grid-template-columns: 1fr;
      }

      .trust-item {
        border-right: none;

        border-bottom: 1px solid rgba(255,255,255,0.3);
      }

      .equipment-content {
        padding: 65px 7%;
      }

      .equipment-content h2 {
        font-size: 40px;
      }

      .quote-section {
        padding: 65px 7%;
      }

      .quote-section h2 {
        font-size: 40px;
      }

      .quote-contact a {
        font-size: 25px;
      }
    }
  </style>
</head>

<body>

<!-- =========================
     NAVIGATION
========================= -->

<header class="nav">

  <div class="brand">
    LIMITLESS
    <span>EQUIPMENT SOURCING, LLC</span>
  </div>

  <nav class="nav-links">
    <a href="#engines">Engines</a>
    <a href="#equipment">Equipment</a>
    <a href="#process">How It Works</a>
    <a href="#quote">Get a Quote</a>
  </nav>

  <a
    class="btn"
    href="https://wa.me/13527224353?text=Hello%20Fabian%2C%20I%20need%20help%20sourcing%20equipment."
    target="_blank"
  >
    WhatsApp Fabian
  </a>

</header>


<!-- =========================
     HERO
========================= -->

<section class="hero">

  <div class="hero-content">

    <p class="eyebrow">
      ENGINES • EQUIPMENT • PARTS • SOURCING
    </p>

    <h1>
      We Can Source It.
    </h1>

    <p class="hero-description">
      Can't find the engine, transmission, equipment or part you need?
      Send us the details and we'll search our supplier network for the
      right sourcing options.
    </p>

    <div class="hero-buttons">

      <a
        class="btn"
        href="#quote"
      >
        REQUEST A QUOTE
      </a>

      <a
        class="btn btn-outline"
        href="https://wa.me/13527224353?text=Hello%20Fabian%2C%20I%20need%20an%20equipment%20quote."
        target="_blank"
      >
        WHATSAPP 352-722-4353
      </a>

    </div>

    <p class="contact-line">
      Fabian — Equipment Sourcing • 352-722-4353
    </p>

  </div>


  <div class="hero-image">

    <img
      src="assets/heavy-equipment.jpg"
      alt="Heavy equipment available for sourcing"
    >

  </div>

</section>


<!-- =========================
     TRUST BAR
========================= -->

<section class="trust-bar">

  <div class="trust-item">
    <strong>Source</strong>
    <span>Supplier Network</span>
  </div>

  <div class="trust-item">
    <strong>Verify</strong>
    <span>VIN & Serial</span>
  </div>

  <div class="trust-item">
    <strong>Quote</strong>
    <span>Clear Pricing</span>
  </div>

  <div class="trust-item">
    <strong>Fulfill</strong>
    <span>Shipping Options</span>
  </div>

</section>


<!-- =========================
     ENGINES
========================= -->

<section
  class="section"
  id="engines"
>

  <p class="eyebrow">
    POWERTRAIN
  </p>

  <h2>
    Engines & Powertrain
  </h2>

  <div class="cards">

    <article class="card">

      <h3>
        Gas Engines
      </h3>

      <p>
        Replacement and remanufactured sourcing options for automotive
        and commercial applications.
      </p>

      <span>
        WE CAN SOURCE IT
      </span>

    </article>


    <article class="card">

      <h3>
        Diesel Engines
      </h3>

      <p>
        Source diesel power solutions for trucks, equipment and
        industrial applications.
      </p>

      <span>
        WE CAN SOURCE IT
      </span>

    </article>


    <article class="card">

      <h3>
        Transmissions
      </h3>

      <p>
        Replacement transmission sourcing matched to the vehicle or
        equipment application.
      </p>

      <span>
        WE CAN SOURCE IT
      </span>

    </article>


    <article class="card">

      <h3>
        Differentials & Components
      </h3>

      <p>
        Ask us to source powertrain components and related parts.
      </p>

      <span>
        WE CAN SOURCE IT
      </span>

    </article>

  </div>

</section>


<!-- =========================
     HEAVY EQUIPMENT
========================= -->

<section
  class="equipment-section"
  id="equipment"
>

  <div class="equipment-image">

    <img
      src="assets/heavy-equipment.jpg"
      alt="Heavy equipment sourcing example"
    >

  </div>


  <div class="equipment-content">

    <p class="eyebrow">
      HEAVY EQUIPMENT
    </p>

    <h2>
      Equipment Down?
    </h2>

    <p>
      Downtime costs money. Give us the make, model and serial number
      and we'll search for sourcing options for engines, components
      and equipment parts.
    </p>

    <a
      class="btn"
      href="#quote"
    >
      START A SEARCH
    </a>

  </div>

</section>


<!-- =========================
     SOURCING CATEGORIES
========================= -->

<section class="section">

  <p class="eyebrow">
    WHAT WE SOURCE
  </p>

  <h2>
    Built Around Your Requirement
  </h2>


  <div class="category-grid">

    <div class="category">
      Automotive Engines
    </div>

    <div class="category">
      Diesel Engines
    </div>

    <div class="category">
      Heavy Equipment
    </div>

    <div class="category">
      Industrial Equipment
    </div>

    <div class="category">
      Transmissions
    </div>

    <div class="category">
      Engine Components
    </div>

    <div class="category">
      Fleet Requirements
    </div>

    <div class="category">
      Commercial Applications
    </div>

    <div class="category">
      Hard-to-Find Parts
    </div>

  </div>


  <div class="important-note">

    <strong>
      Availability Policy:
    </strong>

    Products are generally presented as
    <strong>WE CAN SOURCE IT</strong>
    or
    <strong>AVAILABLE TO ORDER</strong>
    until supplier availability is verified.

  </div>

</section>


<!-- =========================
     PROCESS
========================= -->

<section
  class="process"
  id="process"
>

  <p class="eyebrow">
    THE LIMITLESS PROCESS
  </p>

  <h2>
    From Problem to Solution
  </h2>


  <ol class="process-list">

    <li>

      <span class="process-number">
        01
      </span>

      <strong>
        Tell Us What You Need
      </strong>

      Send the year, make, model, engine/equipment type,
      VIN or serial number and location.

    </li>


    <li>

      <span class="process-number">
        02
      </span>

      <strong>
        Verify the Application
      </strong>

      We check the application and sourcing requirements.

    </li>


    <li>

      <span class="process-number">
        03
      </span>

      <strong>
        We Search Suppliers
      </strong>

      We check supplier options for availability, condition,
      warranty and shipping.

    </li>


    <li>

      <span class="process-number">
        04
      </span>

      <strong>
        Receive Your Quote
      </strong>

      You receive clear pricing and estimated fulfillment
      information before ordering.

    </li>


    <li>

      <span class="process-number">
        05
      </span>

      <strong>
        Fulfillment
      </strong>

      We coordinate the supplier order, shipping and tracking.

    </li>

  </ol>

</section>


<!-- =========================
     QUOTE
========================= -->

<section
  class="quote-section"
  id="quote"
>

  <div>

    <p class="eyebrow">
      REQUEST AN ENGINE OR EQUIPMENT QUOTE
    </p>

    <h2>
      Send Fabian the details.
    </h2>

    <p>
      The fastest route is WhatsApp. Include your VIN or serial
      number and a photo of the identification tag when possible.
    </p>


    <a
      class="btn"
      href="https://wa.me/13527224353?text=LIMITLESS%20QUOTE%20REQUEST%0AYear%3A%0AMake%3A%0AModel%3A%0AEngine%2FEquipment%3A%0AVIN%2FSerial%3A%0ALocation%3A%0AWhat%20I%20need%3A"
      target="_blank"
    >
      START WHATSAPP QUOTE
    </a>

  </div>


  <div class="quote-contact">

    <small>
      CALL / TEXT / WHATSAPP
    </small>

    <a href="tel:+13527224353">
      352-722-4353
    </a>

    <strong>
      Fabian
    </strong>

    <p>
      Equipment Sourcing
    </p>

  </div>

</section>


<!-- =========================
     FAQ
========================= -->

<section class="section faq">

  <p class="eyebrow">
    FREQUENT QUESTIONS
  </p>

  <h2>
    How Limitless Works
  </h2>


  <details>

    <summary>
      Do you keep every engine in stock?
    </summary>

    <p>
      No. Limitless Equipment Sourcing is positioned as a sourcing
      company. Availability is verified with suppliers before an
      item is represented as available.
    </p>

  </details>


  <details>

    <summary>
      Can you source something I don't see on the website?
    </summary>

    <p>
      Yes. Send the application, VIN or serial number and tell us
      what you need. Sourcing is the core service.
    </p>

  </details>


  <details>

    <summary>
      Can the supplier ship directly?
    </summary>

    <p>
      Where supplier and transaction terms permit dropship fulfillment,
      we can coordinate direct shipment to the customer or designated
      destination.
    </p>

  </details>


  <details>

    <summary>
      What information should I send?
    </summary>

    <p>
      Send the year, make, model, engine or equipment type,
      VIN or serial number, location and a photo of the
      identification tag when available.
    </p>

  </details>

</section>


<!-- =========================
     FOOTER
========================= -->

<footer>

  <div class="brand">

    LIMITLESS

    <span>
      EQUIPMENT SOURCING, LLC
    </span>

  </div>


  <p class="footer-tagline">
    We Find It. We Source It. We Get It Moving.
  </p>


  <p>
    Fabian • 352-722-4353
  </p>


  <div class="legal">

    Limitless Equipment Sourcing, LLC is a sourcing/reseller business.
    Product availability, warranty coverage, shipping times and
    manufacturer relationships are subject to supplier verification.
    No affiliation with JASPER, Cummins, or other manufacturers is
    implied unless separately authorized.

  </div>

</footer>


</body>
</html>
