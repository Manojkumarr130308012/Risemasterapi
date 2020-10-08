const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    examtype: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    exam: {
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
module.exports = new mongoose.model('exam', examSchema);