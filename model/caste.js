const mongoose = require("mongoose");

const casteSchema = new mongoose.Schema({
    caste: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('caste', casteSchema);
