const mongoose = require('mongoose');
const {Schema} = mongoose;

const smartContactModel = new Schema(
    {
        title: {type: String},
        phone: {type: Int16Array},
        email: {type:String}
    }
);

module.exports = mongoose.model('smartContact', smartContactModel);