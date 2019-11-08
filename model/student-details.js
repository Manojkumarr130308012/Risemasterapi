const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema({
    rollNo: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    sphoto: {
        type: String,
    },
    gender: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    mobileNo: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    emailId: {
        type: String,
        required: true
    },
    //Father's Details
    ffirstName: {
        type: String,
        required: false
    },
    flastName: {
        type: String,
        required: false
    },
    foccupation: {
        type: String,
        required: false
    },
    fannualIncome: {
        type: String,
        required: false
    },
    fmobileNo: {
        type: String,
        required: false
    },
    paadharNo: {
        type: String,
        required: false
    },
    //Mother's Detail
    mfirstName: {
        type: String,
        required: false
    },
    mlastName: {
        type: String,
        required: false
    },
    moccupation: {
        type: String,
        required: false
    },
    mannualIncome: {
        type: String,
        required: false
    },
    mmobileNo: {
        type: String,
        required: false
    },
    //
    nationality: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    religion: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    caste: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    community: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    //Admission
    admissionCategory: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    admissionType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    financialCategory: {
        type: String,
        required: true
    },
    boarding: {
        type: String,
        required: true
    },
    boardingStartDate: {
        type: String,
        required: false
    },
    //
    applicationNo: {
        type: String,
        required: false
    },
    admissionDate: {
        type: String,
        required: false
    },
    admissionNo: {
        type: String,
        required: false
    },
    joinDate: {
        type: String,
        required: false
    },
    referalType: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    referal: {
        type: String,
        required: false
    },
    motherTongue: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    secondLanguage: {
        type: mongoose.Schema.ObjectId,
        required: false
    },
    //Others
    firstGraduate: {
        type: String,
    },
    scholarshipApplicable: {
        type: String,
    },
    parentExServiceMan: {
        type: String,
    },
    minoritygroup: {
        type: String,
    },
    physicallyChallengedPerson: {
        type: String,
    },
    andhamanAndNicobarNative: {
        type: String,
    },
})
module.exports = new mongoose.model('Student_Details', studentDetailsSchema);
