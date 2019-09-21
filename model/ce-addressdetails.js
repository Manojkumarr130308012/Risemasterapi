
const mongoose = require("mongoose");

const addressDetailsSchema = new mongoose.Schema({
    addressType: {
        type: String,
        required: true
    },
    flatNo: {
        type: String,
        required: true
    },
    streetLane: {
        type: String,
        required: true
    },
    area: {
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
    pincode: {
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
    }
})
module.exports = new mongoose.model('ce-addressdetail', addressDetailsSchema);
