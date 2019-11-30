const mongoose = require("mongoose");

const subjectClassificationSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subjectClassification: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('subject_classification', subjectClassificationSchema);
