const mongoose = require("mongoose");

const courseTypeSchema = new mongoose.Schema({
    courseType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('courseType', courseTypeSchema);
