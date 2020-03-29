const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    number: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
}, {
    timestamps: true,
});


const smartContact = mongoose.model('SmartContact', contactSchema);
module.exports = smartContact;