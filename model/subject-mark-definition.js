const mongoose = require("mongoose");

const subjectMarkDefinitionSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        // required: true
    },
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    minMark: {
        type: String,
        required: true
    },
    maxMark: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('subject_markdefinition', subjectMarkDefinitionSchema);
