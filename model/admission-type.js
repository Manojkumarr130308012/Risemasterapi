const mongoose = require("mongoose");

const admissionTypeSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    admissiontype: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('admission-type', admissionTypeSchema);
