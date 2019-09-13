const mongoose = require("mongoose");

const nationalitySchema = new mongoose.Schema({
    nationality: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('nationality', nationalitySchema);
