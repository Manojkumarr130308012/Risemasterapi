const mongoose = require("mongoose");

const addressTypeSchema = new mongoose.Schema({
    addressType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('addressType', addressTypeSchema);
