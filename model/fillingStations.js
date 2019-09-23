const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    }

})
module.exports = new mongoose.model('filling-stations', stationSchema);
