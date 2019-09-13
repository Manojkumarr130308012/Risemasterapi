const mongoose = require("mongoose");

const motherTongueSchema = new mongoose.Schema({
    motherTongue: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('motherTongue', motherTongueSchema);
