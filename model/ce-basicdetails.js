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
        required: true
    },
    regNo12th: {
        type: String,
        required: true
    },
    mark12th: {
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
        type: mongoose.Schema.ObjectId,
        required: true
    },
    board: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    referenceType: {
        type: mongoose.Schema.ObjectId,
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
        type: mongoose.Schema.ObjectId,
        required: true
    },
    admissionCategory: {
        type: String,
        required: true
    },
    courseCategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseProgram: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    scholarshipCategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    remark: {
        type: String,
        required: true
    },
    nationality: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    religion: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    community: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    caste: {
        type: mongoose.Schema.ObjectId,
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
module.exports = new mongoose.model('ce-basicdetail', basicDetailsSchema);


// s-> student ; f-> father ; m-> mother; p-> parent
    //ce/CE -> CandidateEnquiry