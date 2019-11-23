const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseprogram: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    batch: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('batch', batchSchema);
