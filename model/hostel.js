const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    hostel: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('hostel', hostelSchema);
