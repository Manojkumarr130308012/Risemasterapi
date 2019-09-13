const mongoose = require("mongoose");

const referralTypeSchema = new mongoose.Schema({
    referralType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('referralType', referralTypeSchema);
