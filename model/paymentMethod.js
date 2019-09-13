const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
    paymentMethod: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('paymentMethod', paymentMethodSchema);
