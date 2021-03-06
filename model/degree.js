const mongoose = require("mongoose");

const degreeSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    degree: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('degree', degreeSchema);
