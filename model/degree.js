const mongoose = require("mongoose");

const degreeSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('degree', degreeSchema);
