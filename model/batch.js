const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    degree: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    batch: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('batch', batchSchema);
