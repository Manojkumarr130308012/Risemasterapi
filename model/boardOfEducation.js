const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    board: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('board', boardSchema);