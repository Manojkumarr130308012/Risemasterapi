const mongoose = require("mongoose");

const relationshipSchema = new mongoose.Schema({
    relationship: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('relationship', relationshipSchema);
