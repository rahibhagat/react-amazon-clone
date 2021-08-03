const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JKLz6SEn4qBfOhpsVvOu3y78vepGbEikhGpDFbiNdJR8ucCgjwHGZsbXl69XTb46jUz1w5AwrHp44NGjO43Ttc900VQhmIsIZ"
);

// API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get(`/`, (req, res) => {
  res.status(200).send("hello world");
});

app.post(`/payments/create`, async (req, res) => {
  const total = req.query.total;

  console.log("Payments Request Received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-2752e/us-central1/api
