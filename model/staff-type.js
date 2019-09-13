const mongoose = require("mongoose");

const staffTypeSchema = new mongoose.Schema({
    stafftype: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staff-type', staffTypeSchema);
