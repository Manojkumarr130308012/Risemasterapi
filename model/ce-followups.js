const mongoose = require("mongoose");

const followupsSchema = new mongoose.Schema({
    dateOfEnquiry: {
        type: String,
        required: true
    },
    modeOfEnquiry: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    nextEnquiryDate: {
        type: String,
        required: false
    },
    nextEnquiryTime: {
        type: String,
        required: false
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('ce_followup', followupsSchema);