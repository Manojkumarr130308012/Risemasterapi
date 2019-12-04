const mongoose = require("mongoose");

const sectionStaffSchema = new mongoose.Schema({
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
    batch: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    semester: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subject: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    section: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    staff: {
        type: mongoose.Schema.ObjectId,
        required: true
    }

})
module.exports = new mongoose.model('section_staff', sectionStaffSchema);
