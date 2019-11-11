const mongoose = require("mongoose");

const studentContactSchema = new mongoose.Schema({
    addressType: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    taluk: {
        type: String
    },
    villageName: {
        type: String
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    pin: {
        type: String
    },
})
module.exports = new mongoose.model('student_contact', studentContactSchema);
