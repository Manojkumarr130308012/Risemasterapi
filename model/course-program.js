const mongoose = require("mongoose");

const courseProgramSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    coursecategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseprogram: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('course-program', courseProgramSchema);
