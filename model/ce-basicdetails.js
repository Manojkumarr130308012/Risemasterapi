const mongoose = require("mongoose");

const basicDetailsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    aadharNo: {
        type: String,
        required: false
    },
    regNo12th: {
        type: String,
        required: false
    },
    mark12th: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    sMobileNumber: {
        type: String,
        required: false
    },
    fFirstName: {
        type: String,
        required: false
    },
    fLastName: {
        type: String,
        required: false
    },
    fMobileNumber: {
        type: String,
        required: false
    },
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    board: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    referenceType: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    referenceBy: {
        type: String,
        required: false
    },
    applicatonNo: {
        type: String,
        required: true
    },
    admissiontype: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    admissionCategory: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    scholarshipCategory: {
        type: mongoose.Schema.ObjectId,
        // required: false
    },
    remark: {
        type: String,
        required: false
    },
    nationality: {
        type: mongoose.Schema.ObjectId,
        // required: false
    },
    religion: {
        type: mongoose.Schema.ObjectId,
        // required: false
    },
    community: {
        type: mongoose.Schema.ObjectId,
        // required: false
    },
    caste: {
        type: mongoose.Schema.ObjectId,
        // required: false
    },
    motherTongue: {
        type: mongoose.Schema.ObjectId,
        // required: false
    },
    fEmail: {
        type: String,
        required: false
    },
    fOccupation: {
        type: String,
        required: false
    },
    fAnnualIncome: {
        type: String,
        required: false
    },
    mName: {
        type: String,
        required: false
    },
    mEmail: {
        type: String,
        required: false
    },
    mMobileNo: {
        type: String,
        required: false
    },
    mOccupation: {
        type: String,
        required: false
    },
    mAnnualIncome: {
        type: String,
        required: false
    },
    pPanNumber: {
        type: String,
        required: false
    },
    pAadharNumber: {
        type: String,
        required: false
    },
    relativeName: {
        type: String,
        required: false
    },
    sPhoto: {
        type: String
    },
    enquiryDate: {
        type: String
    }
})


module.exports = new mongoose.model('ce_basicdetail', basicDetailsSchema);

