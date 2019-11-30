const mongoose = require("mongoose");

const subjectTypeSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subjectType: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('subject_type', subjectTypeSchema);
