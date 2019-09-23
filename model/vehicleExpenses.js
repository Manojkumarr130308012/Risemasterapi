const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const expenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('vehicle-expenses', expenseSchema);