const mongoose = require("mongoose");

const subjectAddSchema = new mongoose.Schema({
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
    subjectCode: {
        type: String,
        required: true
    },
    subjectDescription: {
        type: String,
        required: true
    },
    subjectType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subjectClassification: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subjectCategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    },
    markDefinition: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    effectiveFrom: {
        type: String,
        required: true
    },
    effectiveTo: {
        type: String,
        required: true
    },
    topicCoverage: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    lessonPlan: {
        type: String,
        required: true
    },
    semester: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
})
module.exports = new mongoose.model('subject_detail', subjectAddSchema);
