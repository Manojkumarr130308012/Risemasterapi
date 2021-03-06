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
        type: mongoose.Schema.ObjectId
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
    medicallyFit: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_medicainfo', studentMedicalSchema);
