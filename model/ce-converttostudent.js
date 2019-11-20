const mongoose = require("mongoose");

const convertSchema = new mongoose.Schema({
    degree: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    batch: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    semester: {
        type: String,
        required: false
    },
    languageSubject: {
        type: String,
        required: false
    },
    boardingType: {
        type: String,
        required: false
    },
    financialCategory: {
        type: String
    },
    joiningDate: {
        type: String
    },
    hostel: {
        type: String
    },
    rout: {
        type: String
    },
    busstop: {
        type: String
    },
    checkbox1: {
        type: String
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('ce_converttostudent', convertSchema);