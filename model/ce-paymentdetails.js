
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
        type: mongoose.Schema.ObjectId,
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
        type: mongoose.Schema.ObjectId,
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
    },
    paymentStatus: {
        type: String
    }
    
})
module.exports = new mongoose.model('ce_paymentdetail', paymentDetailsSchema);
