const mongoose = require("mongoose");

const scholarshipCategorySchema = new mongoose.Schema({
    scholarshipCategory: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('scholarshipCategory', scholarshipCategorySchema);
