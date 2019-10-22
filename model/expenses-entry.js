const mongoose = require("mongoose");

const expensesEntrySchema = new mongoose.Schema({
    vehicleNo: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    expense: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('expenses-entry', expensesEntrySchema);