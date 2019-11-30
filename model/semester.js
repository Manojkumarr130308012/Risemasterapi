const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    semester: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('semester', semesterSchema);
