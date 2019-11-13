const mongoose = require("mongoose");

const studentQualificationSchema = new mongoose.Schema({
    qualificationType: {
        type: mongoose.Schema.ObjectId,
    },
    courseType: {
        type: mongoose.Schema.ObjectId,
    },
    courseName: {
        type: String
    },
    courseStartDate: {
        type: String,  
    },
    courseEndDate: {
        type: String,  
    },
    board: {
        type: mongoose.Schema.ObjectId,
    },
    medium: {
        type: mongoose.Schema.ObjectId,
    },
    institution: {
        type: String,
    },
    city: {
        type: String,
    },
    taluk: {
        type: String,
    },
    district: {
        type: String,
    },
   state: {
        type: String,
    },
    country: {
        type: String,
    },
    pincode: {
        type: String,
    },
    yearOfPassing: {
        type: String,
    },
    markObtained: {
        type: String,
    },
    maxMark: {
        type: String,
    },
    organisationType: {
        type: String,
    },
    cerifcateNo: {
        type: String
    },
    registerNo: {
        type: String
    },
    placeOfIssue: {
        type:String
    },
    certificateIssuedate: {
        type:String
    },
    tmrCode: {
        type: String
    },
    tmrDate: {
        type: String
    },
    groupCode: {
        type: String
    },
    fileLoctaion : {
		type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_qualification', studentQualificationSchema);