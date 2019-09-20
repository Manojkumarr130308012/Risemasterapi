const mongoose = require("mongoose");

const basicDetailsSchema = new mongoose.Schema({
    // s-> student ; f-> father ; m-> mother; p-> parent
    //ce/CE -> CandidateEnquiry
   
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
        type: String,
        required: true
    },
    aadharNo: {
        type: String,
        required: true
    },
    RegNo12th: {
        type: String,
        required: true
    },
    Mark12th: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sMobileNumber: {
        type: String,
        required: true
    },
    fFirstName: {
        type: String,
        required: true
    },
    fLastName: {
        type: String,
        required: true
    },
    fMobileNumber: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    board: {
        type: String,
        required: true
    },
    referenceType: {
        type: String,
        required: true
    },
    referenceBy: {
        type: String,
        required: true
    },
    applicatonNo: {
        type: String,
        required: true
    },
    admissionType: {
        type: String,
        required: true
    },
    admissionCategory: {
        type: String,
        required: true
    },
    courseType: {
        type: String,
        required: true
    },
    courseProgram: {
        type: String,
        required: true
    },
    scholarshipCategory: {
        type: String,
        required: true
    },
    remark: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    community: {
        type: String,
        required: true
    },
    caste: {
        type: String,
        required: true
    },
    motherTongue: {
        type: String,
        required: true
    },
    fEmail: {
        type: String,
        required: true
    },
    fOccupation: {
        type: String,
        required: true
    },
    fAnnualIncome: {
        type: String,
        required: true
    },
    mName: {
        type: String,
        required: true
    },
    mEmail: {
        type: String,
        required: true
    },
    mMobileNo: {
        type: String,
        required: true
    },
    mOccupation: {
        type: String,
        required: true
    },
    mAnnualIncome: {
        type: String,
        required: true
    },
    pPanNumber: {
        type: String,
        required: true
    },
    pAadharNumber: {
        type: String,
        required: true
    },
    relativeName: {
        type: String,
        required: true
    },
    sPhoto: {
        type: String
    }


   
})
module.exports = new mongoose.model('CE_basicdetails', basicDetailsSchema);
