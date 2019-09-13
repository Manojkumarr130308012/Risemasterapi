const mongoose = require("mongoose");

const payTypeSchema = new mongoose.Schema({
    paytype: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('pay-type', payTypeSchema);
