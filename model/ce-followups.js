const mongoose = require("mongoose");

const followupsSchema = new mongoose.Schema({
    dateOfEnquiry: {
        type: String,
        required: true
    },
    modeOfEnquiry: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nextEnquiryDate: {
        type: String,
        required: true
    },
    nextEnquiryTime: {
        type: String,
        required: true
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('followup', followupsSchema);