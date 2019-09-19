const mongoose = require("mongoose");

const courseTypeSchema = new mongoose.Schema({
    qualificationType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseType: {
        type: String,
        required: true
    },
    maxMark: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('courseType', courseTypeSchema);
