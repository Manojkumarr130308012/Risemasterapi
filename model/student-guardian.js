const mongoose = require("mongoose");

const studentGuardianSchema = new mongoose.Schema({
    relationship: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    addressType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    flatNo: {
        type: String
    },
    areaLocality: {
        type: String
    },
    mobileNo: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    district: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_guardian', studentGuardianSchema);
