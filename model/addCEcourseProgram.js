const mongoose = require("mongoose");

const addCECPSchema = new mongoose.Schema({
    courseProgram: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('CECourseProgram', addCECPSchema);
