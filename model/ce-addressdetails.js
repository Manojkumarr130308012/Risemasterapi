
const mongoose = require("mongoose");

const addressDetailsSchema = new mongoose.Schema({
    addresstype: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    flatNo: {
        type: String,
        required: false
    },
    streetLane: {
        type: String,
        required: false
    },
    area: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})

module.exports = new mongoose.model('ce_addressdetail', addressDetailsSchema);
