const mongoose = require("mongoose");

const academicYearSchema = new mongoose.Schema({
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
    year: {
        type: String,
        required: true
    },
    short_code: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('academicYear', academicYearSchema);