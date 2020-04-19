const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone_number: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      required: false,
      trim: true,
      unique: false,
    },
    instagram: {
      type: String,
      required: false,
      trim: true,
      unique: true,
    },
    twitter: {
      type: String,
      required: false,
      trim: true,
      unique: true,
    },
    snapchat: {
      type: String,
      required: false,
      trim: true,
      unique: true,
    },
    intimacy: Number,
    interest: [String],
    industry: {
      type: String
    },
    job: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const contactModel = mongoose.model("Contact", contactSchema);
module.exports = contactModel;
