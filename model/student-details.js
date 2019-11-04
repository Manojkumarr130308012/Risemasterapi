const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema({
    rollNo: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
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
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    //Father's Details
    ffirstName: {
        type: String,
        required: true
    },
    flastName: {
        type: String,
        required: true
    },
    foccupation: {
        type: String,
        required: true
    },
    fannualIncome: {
        type: String,
        required: true
    },
    fmobileNo: {
        type: String,
        required: true
    },
    //Mother's Detail
    mfirstName: {
        type: String,
        required: true
    },
    mlastName: {
        type: String,
        required: true
    },
    moccupation: {
        type: String,
        required: true
    },
    mannualIncome: {
        type: String,
        required: true
    },
    mmobileNo: {
        type: String,
        required: true
    },
    //
    nationality: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    religion: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    caste: {
        type: mongoose.Schema.ObjectId,
        required: true
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
        required: true
    },
    //
    applicationNo: {
        type: String,
        required: true
    },
    admissionDate: {
        type: String,
        required: true
    },
    admissionNo: {
        type: String,
        required: true
    },
    joinDate: {
        type: String,
        required: true
    },
    referalType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    referal: {
        type: String,
        required: true
    },
    motherTongue: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    secondLanguage: {
        type: mongoose.Schema.ObjectId,
        required: true
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
