const mongoose = require("mongoose");

const studentCertificateSchema = new mongoose.Schema({
    certificateType: {
        type: mongoose.Schema.ObjectId
    },
    registerNo: {
        type: String
    },
    certificateNo: {
        type: String
    },
    fileUpload: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_certificate', studentCertificateSchema);
