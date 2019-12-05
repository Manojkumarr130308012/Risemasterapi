const mongoose = require("mongoose");

const weekDaySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('week_day', weekDaySchema);
