const mongoose = require("mongoose");

const subjectCategorySchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subjectCategory: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('subject_category', subjectCategorySchema);
