const mongoose = require("mongoose");

const addCECPSchema = new mongoose.Schema({
    courseprogram: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    coursecategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: false
    }
})
module.exports = new mongoose.model('CECourseProgram', addCECPSchema);
