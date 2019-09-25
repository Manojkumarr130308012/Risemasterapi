const mongoose = require("mongoose");

const stageDetailsSchema = new mongoose.Schema({
    stageName: {
        type: String,
        required: true
    },
    busStop: {
        type: String,
        required: true
    },
    KMS: {
        type: String,
        required: true
    },
    fees: {
        type: String,
        required: true
    },
    IdValue: {
        type: String,
        required: true
    },
})
module.exports = new mongoose.model('stage-details', stageDetailsSchema);
