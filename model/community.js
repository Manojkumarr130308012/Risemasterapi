const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    community: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('community', communitySchema);
