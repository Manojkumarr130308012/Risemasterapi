const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    vanNo: {
        type: String,
        required: true
    },
    engineNo: {
        type: String,
        required: true
    },
    chasisNo: {
        type: String,
        required: true
    },
    ownership: {
        type: String,
        required: true
    },
    vehicleValue: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    insurance: {
        type: String,
        required: true
    },
    fc: {
        type: String,
        required: true
    },
    smokeTest: {
        type: String,
        required: true
    },
    serviceKMS: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }


})
module.exports = new mongoose.model('vehicle-master', vehicleSchema);