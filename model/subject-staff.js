const mongoose = require("mongoose");

const subjectStaffSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    department: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    staffName: {
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
    }
})
module.exports = new mongoose.model('subject_staff', subjectStaffSchema);
