const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
   institution: {
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
    semesterType: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('semester', semesterSchema);
