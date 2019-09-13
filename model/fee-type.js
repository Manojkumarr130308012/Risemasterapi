const mongoose = require("mongoose");

const feeTypeSchema = new mongoose.Schema({
    feetype: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('fee-type', feeTypeSchema);
