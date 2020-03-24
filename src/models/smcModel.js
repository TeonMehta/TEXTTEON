const mongoose = require('mongoose');


const smcSchema = mongoose.Schema({
    name:{type :String,required: true},
    phone: {type :Number,required: true},
    email: {type :String,required: true},
    industry:{type :String,required: true},
    occupation: {type :String,required: true}
});


module.exports = mongoose.model('SMC', smcSchema);