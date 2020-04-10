const http = require("http");
const express = require("express");
require("dotenv").config();
const messagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();

const accountSID =  process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSID, authToken);

client.messages
  .create({
    body: "This is the first text",
    from: "+17726783204",
    to: "+15148037407",
  })
  .then((message) => console.log(message));


