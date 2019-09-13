const mongoose = require("mongoose");

const salutationSchema = new mongoose.Schema({
    salutation: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('salutation', salutationSchema);
