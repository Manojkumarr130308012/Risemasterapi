
const mongoose = require("mongoose");

const addressDetailsSchema = new mongoose.Schema({
    canId: {
		type: String,
		required: true
	},
    addresstype: {
        type: mongoose.Schema.ObjectId,
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
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('ce_addressdetail', addressDetailsSchema);
