const mongoose = require("mongoose");

const studentAttendenceSchema = new mongoose.Schema({
    attendenceDate: {
        type: String,
       // required: true
    },
    attendenceDay: {
        type: String,
      //  required: true
    },
    rollNo: {
        type: String,
      //  required: true
    },
    regNo: {
        type: String,
      //  required: true
    },
    studentId: {
        type: mongoose.Schema.ObjectId,
      //  required: true
    },
    staffId: {
        type: mongoose.Schema.ObjectId,
      //  required: true
    },
    subjectId: {
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
    period:{
      type: mongoose.Schema.ObjectId,
      // required: true

    },
    studentAttendence:{
        type: String,
       // required: true
    }
})
module.exports = new mongoose.model('student-attendence', studentAttendenceSchema);
