const mongoose = require("mongoose");

const studentLeaveSchema = new mongoose.Schema({
    leaveType: {
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
    session: {
        type: String
    },
    reason: {
        type: String
    },
    requestDate: {
        type: String,
       // required: true
    },
    
    studentId: {
        type: mongoose.Schema.ObjectId,
      //  required: true
    },
    institution: {
        type: mongoose.Schema.ObjectId,
      //  required: true
    },
   
    courseprogram: {
        type: mongoose.Schema.ObjectId,
       // required: true
    },
    batch: {
        type: mongoose.Schema.ObjectId,
       // required: true
    },
    academicYear: {
        type: mongoose.Schema.ObjectId,
       // required: true
    },
    section: {
        type: mongoose.Schema.ObjectId,
       // required: true
    },
    semester: {
        type: mongoose.Schema.ObjectId,
       // required: true
    },
})
module.exports = new mongoose.model('student-leave', studentLeaveSchema);
