const mongoose = require("mongoose");

const mediumSchema = new mongoose.Schema({
    medium: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('medium', mediumSchema);
