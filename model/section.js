const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    section: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('section', sectionSchema);
