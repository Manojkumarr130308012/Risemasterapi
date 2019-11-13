const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    activityCategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
})
module.exports = new mongoose.model('subCategory', subCategorySchema);
