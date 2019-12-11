const mongoose = require("mongoose");

const timeTableSchema = new mongoose.Schema({
    institution:
    {
        type: mongoose.Schema.ObjectId,
       
    },
    courseProgram:
    {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    academicYear:
    {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    semester:
    {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subject: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    sectionid: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    staff: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    period:
    {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    day:
    {
        type: mongoose.Schema.ObjectId,
        required: true
    },

})
module.exports = new mongoose.model('time_table', timeTableSchema);