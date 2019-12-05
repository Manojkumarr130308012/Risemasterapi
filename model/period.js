const mongoose = require("mongoose");

const periodSchema = new mongoose.Schema({
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    periofName: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    }, 
    periodOrder: {
        type: Number,
        required: true
    }


})
module.exports = new mongoose.model('period', periodSchema);
