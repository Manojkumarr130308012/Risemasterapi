const mongoose = require("mongoose");

const bloodgroupSchema = new mongoose.Schema({
    bloodgroup: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('bloodgroup', bloodgroupSchema);
