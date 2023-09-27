const functions = require( "firebase-functions" );
const express = require( "express ");
const cors = require( "cors");
const stripe = require("stripe")("sk_test_51NryqJSDYaRNdUOfcTC2zHwA8G615WetTO9CsXUgjE2atGkoU30NQewNpxrzpFDIEhon9YVwApynjTFYojE3jAR800wPQee4il");
// const stripe = require( "stripe")("sk_test_51NryqJSDYaRNdUOfcTC2zHwA8G615WetTO9CsXUgjE2atGkoU30NQewNpxrzpFDIEhon9YVwApynjTFYojE3jAR800wPQee4il");

// import functions from "firebase-functions";
// import express  from "express";
// import cors from "cors";
// import { Stripe } from "stripe"("sk_test_51NryqJSDYaRNdUOfcTC2zHwA8G615WetTO9CsXUgjE2atGkoU30NQewNpxrzpFDIEhon9YVwApynjTFYojE3jAR800wPQee4il");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payment/create", async (request, response) =>{
  const total = request.query.total;

  console.log("payment request received", total);

  const paymentIntend = await stripe.paymentIntends.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntend.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
