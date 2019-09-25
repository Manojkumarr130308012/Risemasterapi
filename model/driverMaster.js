const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vehicleNo: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    fathersName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    joiningYear: {
        type: String,
        required: true
    },
    personalContactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    drivingLicenseNo: {
        type: String,
        required: true
    },
    aadhaarNo: {
        type: String,
        required: true
    },
    badgeNo: {
        type: String,
        required: true
    },
    badgeExpiry: {
        type: String,
        required: true
    },
    homeContactNo: {
        type: String,
        required: true
    },
    licenseDOIDate: {
        type: String,
        required: true
    },
    licenseExpDate: {
        type: String,
        required: true
    },
    referencePersonName: {
        type: String,
        required: true
    },
    referencePersonContactNo: {
        type: String,
        required: true
    },
    photoLocation : {
		type: String
    },
    fileLocation  : {
        type: String
    }


})
module.exports = new mongoose.model('driver-master', driverSchema);