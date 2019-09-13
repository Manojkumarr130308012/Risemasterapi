const mongoose = require("mongoose");

const courseCategorySchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    coursecategory: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('course-category', courseCategorySchema);
