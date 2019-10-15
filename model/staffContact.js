const mongoose = require("mongoose");

const staffContactSchema = new mongoose.Schema({
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
    id: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staffContact', staffContactSchema);
