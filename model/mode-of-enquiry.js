const mongoose = require("mongoose");

const modeOfEnquirySchema = new mongoose.Schema({
    modeofenquiry: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('modeof-enquiry', modeOfEnquirySchema);
