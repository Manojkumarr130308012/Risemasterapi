
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
        required: false
    },
    chequeDDNumber: {
        type: String,
        required: false
    },
    advanceFeeType: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    totalAmount: {
        type: String
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
    
})
module.exports = new mongoose.model('ce_paymentdetail', paymentDetailsSchema);
