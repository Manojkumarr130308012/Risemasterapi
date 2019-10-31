
const mongoose = require("mongoose");

const paymentDetailsSchema = new mongoose.Schema({
    paymentDate: {
        type: String,
        required: true
    },
    paymentmethod: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    bank: {
        type: String,
        required: false
    },
    chequeDDDate: {
        type: String,
        required: true
    },
    chequeDDNumber: {
        type: String,
        required: true
    },
    advanceFeeType: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
    
})
module.exports = new mongoose.model('ce_paymentdetail', paymentDetailsSchema);
