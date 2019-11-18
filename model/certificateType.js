const mongoose = require("mongoose");

const certificateTypeSchema = new mongoose.Schema({
    certificateType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('certificateType', certificateTypeSchema);
