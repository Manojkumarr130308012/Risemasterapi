const mongoose = require("mongoose");

const maritalStatusSchema = new mongoose.Schema({
    maritalstatus: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('marital-status', maritalStatusSchema);
