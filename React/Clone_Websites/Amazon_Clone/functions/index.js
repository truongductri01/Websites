const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HLJxtIzcYQrlPoptEYVNQ70w1hNjA6QX5LMmPPanXH3YbNPPaxNQLecp6ovJVZ0eB2TK6IcuAL2IzuUOV625irx00k4qYqWO5"
); // the second bracket is the container of the secret key

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true })); // Allow fetch to happen
app.use(express.json()); // Store and pass data in JSON format

// - API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello world");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment require received >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currence
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// api functions: http://localhost:5001/clone-ec4f9/us-central1/api
