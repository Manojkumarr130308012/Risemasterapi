const mongoose = require("mongoose");

const examtypeSchema = new mongoose.Schema({
    examtype: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('examtype', examtypeSchema);