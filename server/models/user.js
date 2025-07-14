const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    ptname: {
        type: String,
        required: true
    },
    ptemail: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
  ptnumber: {
  type: Number,
  required: true 
},
    doctorname: {
        type: String,
        required: true
    },
    dateofappointment: {
        type: String,
        required: true
    }
});

const User = mongoose.model('ptdata', patientSchema);

module.exports = User;
