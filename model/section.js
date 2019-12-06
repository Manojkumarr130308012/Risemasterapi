const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    department: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseprogram: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    batch: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    academicYear: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    semester: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    section: {
        type: String,
        required: true
    }
  

})
module.exports = new mongoose.model('section', sectionSchema);
