const mongoose = require("mongoose");

const religionSchema = new mongoose.Schema({
    religion: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('religion', religionSchema);
