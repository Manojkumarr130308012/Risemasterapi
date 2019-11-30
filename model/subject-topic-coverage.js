const mongoose = require("mongoose");

const subjectTopicCoverageSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    topicCoverage: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('subject_topiccoverage', subjectTopicCoverageSchema);
