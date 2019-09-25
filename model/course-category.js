const mongoose = require("mongoose");

const courseCategorySchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    coursecategory: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('course-category', courseCategorySchema);
