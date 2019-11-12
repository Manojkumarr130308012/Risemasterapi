const mongoose = require("mongoose");

const studentMedicalSchema = new mongoose.Schema({
    height: {
        type: String
    },
    weight: {
        type: String
    },
    hairColor: {
        type: String
    },
    eyeColor: {
        type: String
    },
    complexion: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    colorBlind: {
        type: String
    },
    identityType: {
        type: String
    },
    markDetails: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_medicainfo', studentMedicalSchema);
