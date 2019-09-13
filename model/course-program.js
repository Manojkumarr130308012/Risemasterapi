const mongoose = require("mongoose");

const courseProgramSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    coursecategory: {
        type: String,
        required: true
    },
    courseprogram: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('course-program', courseProgramSchema);
