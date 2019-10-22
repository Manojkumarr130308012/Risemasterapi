const mongoose = require("mongoose");

const fuelEntrySchema = new mongoose.Schema({
    fuelVehicleNo: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    fuelDate: {
        type: String,
        required: true
    },
    openKM: {
        type: String,
        required: true
    },
    closeKM: {
        type: String,
        required: true
    },
    runningKM: {
        type: String,
    },
    isFill: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    fuelAmount: {
        type: String,
    },
    stationName: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    mileage: {
        type: String,
    },
    billNo: {
        type: String,
        required: true
    },
    driverName: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('fuel-entry', fuelEntrySchema);