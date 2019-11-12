const mongoose = require("mongoose");

const studentContactSchema = new mongoose.Schema({
    addressType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    taluk: {
        type: String
    },
    villageName: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_contact', studentContactSchema);
