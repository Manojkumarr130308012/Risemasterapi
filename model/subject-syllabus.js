const mongoose = require("mongoose");

const subjectSyllabusSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    unitNo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lecturePeriod: {
        type: String,
        required: true
    },
    tutorialPeriod: {
        type: String,
        required: true
    },
    unitDescription: {
        type: String,
        required: true
    },
    topicSplitChar: {
        type: String
    },
})
module.exports = new mongoose.model('subject_syllabus', subjectSyllabusSchema);
