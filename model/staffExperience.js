const mongoose = require("mongoose");

const staffExperienceSchema = new mongoose.Schema({
    organization: {
        type: String,
        required: true
    },
    expDesignation: {
        type: String,
        required: true
    },
    natureOfExperience: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    fromDate: {
        type: String,
        required: true
    },
    toDate: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staffExperience', staffExperienceSchema);
