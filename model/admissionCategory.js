const mongoose = require("mongoose");

const admissionCategorySchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    admissionCategory: {
        type: String,
        required: true
    },
})
module.exports = new mongoose.model('admissionCategory', admissionCategorySchema);