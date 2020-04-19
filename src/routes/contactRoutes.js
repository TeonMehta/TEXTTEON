const express = require("express");
const contactRouter = express.Router();
const Contact = require("../models/smart_contact_model");

// GETS ALL CONTACTS
contactRouter.route("/").get((req, res) => {
  Contact.find()
    .then((contacts) => res.json(contacts))
    .catch((err) => res.status(400).json("ERROR: " + err));
});
// ADDS SINGLE CONTACT TO DATABASE
contactRouter.route("/add").post((req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone_number = req.body.phone_number;
  const email = req.body.email;
  const instagram = req.body.instagram;
  const twitter = req.body.twitter;
  const snapchat = req.body.snapchat;
  const gender = req.body.gender;
  const industry = req.body.industry;
  const job = req.body.job;
  const interest = req.body.interest;

const newContact = new Contact({
    first_name,
    last_name,
    phone_number,
    email,
    instagram,
    twitter,
    snapchat,
    gender,
    industry,
    job,
    interest,
  });

  newContact
    .save()
    .then(() => res.json("Contact Added."))
    .catch((err) => res.status(400).json("ERROR: " + err));
});
// FINDS SINGLE CONTACT
contactRouter.route("/:id").get((req, res) => {
  Contact.findById(req.params.id)
    .then((contacts) => res.json(contacts))
    .catch((err) => res.status(400).json("ERROR: " + err));
});
// FIND SINGLE CONTACT AND DELETE
contactRouter.route("/:id").delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Deleted ID: ${req.params.id}`))
    .catch((err) => res.status(400).json("ERROR: " + err));
});
// EDIT SINGLE CONTACT
contactRouter.route("/edit/:id").post((req, res) => {
  Contact.findById(req.params.id)
    .then(contact => {
      contact.first_name = req.body.first_name;
      contact.last_name = req.body.last_name;
      contact.phone_number = req.body.phone_number;
      contact.email = req.body.email;
      contact.instagram = req.body.instagram;
      contact.twitter = req.body.twitter;
      contact.snapchat = req.body.snapchat;
      contact.gender = req.body.gender;
      contact.industry = req.body.industry;
      contact.job = req.body.job;
      contact.interest = req.body.interest;
      contact.intamacy = req.body.intamacy;

      contact
        .save()
        .then(() => res.json(`${req.params.id} has been updated.`))
        .catch((err) => res.status(400).json("ERROR: " + err));
    })
    .catch((err) => res.status(400).json("ERROR: " + err));
});

module.exports = contactRouter;
