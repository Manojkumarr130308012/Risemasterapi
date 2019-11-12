const mongoose = require("mongoose");

const studentOtherSchema = new mongoose.Schema({
    motherAge: {
        type: String
    },
    placeOfBirth: {
        type: String
    },
    dateOfLeave: {
        type: String
    },
    overAllRank: {
        type: String
    },
    universityAppNo: {
        type: String
    },
    universirtAdmiNo: {
        type: String
    },
    challanNo: {
        type: String
    },
    challandate: {
        type: String
    },
    challanAmount: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_other', studentOtherSchema);
