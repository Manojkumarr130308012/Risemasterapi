const mongoose = require("mongoose");

const institutionTypeSchema = new mongoose.Schema({
    institutionType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('institutionType', institutionTypeSchema);
