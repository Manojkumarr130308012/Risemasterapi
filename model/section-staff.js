const mongoose = require("mongoose");

const sectionStaffSchema = new mongoose.Schema({
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
    },
    status: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('section_staff', sectionStaffSchema);
