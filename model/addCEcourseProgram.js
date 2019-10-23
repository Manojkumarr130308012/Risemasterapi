const mongoose = require("mongoose");

const addCECPSchema = new mongoose.Schema({
    courseProgram: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('CECourseProgram', addCECPSchema);
