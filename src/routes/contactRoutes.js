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

  const newContact = new Contact({
    first_name,
    last_name,
    phone_number,
    email,
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
//
contactRouter.route("/:id").delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Deleted ID: ${req.params.id}`))
    .catch((err) => res.status(400).json("ERROR: " + err));
});

contactRouter.route("/edit/:id").post((req, res) => {
  Contact.findByIdAndUpdate(req.params.id)
    .then((contact) => {
      contact.name = req.body.name;
      contact.number = req.body.number;

      contact
        .save()
        .then(() => res.json(`${req.params.id} has been updated.`))
        .catch((err) => res.status(400).json("ERROR: " + err));
    })
    .catch((err) => res.status(400).json("ERROR: " + err));
});

module.exports = contactRouter;
