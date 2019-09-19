const mongoose = require("mongoose");

const qualificationTypeSchema = new mongoose.Schema({
    qualificationType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('qualificationType', qualificationTypeSchema);
