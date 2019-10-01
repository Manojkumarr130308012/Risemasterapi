const mongoose = require("mongoose");

const staffDetailsSchema = new mongoose.Schema({
    // institution: {
    //     type: mongoose.Schema.ObjectId,
    //     // required: true
    // },
    // department: {
    //     type: mongoose.Schema.ObjectId,
    //     // required: true
    // },
    
    staffCode: {
        type: String,
        required: true
    },
    stafftype: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    staffrole: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    salutation: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    doj: {
        type: String,
        required: true
    },
    gender: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    employeeCode: {
        type: String,
        required: true
    },
    paytype: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    emergencyNo: {
        type: String,
        required: true
    },
    maritalstatus: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    bloodgroup: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    photoLocation : {
		type: String,
    },
    // id: {
    //     type: String,
    //     required: true
    // }
})
module.exports = new mongoose.model('staff-details', staffDetailsSchema);
