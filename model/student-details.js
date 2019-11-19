const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema({
    degree: {
        type: mongoose.Schema.ObjectId
    },
    batch: {
        type: mongoose.Schema.ObjectId
    },
    rollNo: {
        type: String
    },
    regNo: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    sPhoto : {
		type: String
	},
    gender: {
        type: mongoose.Schema.ObjectId
    },
    dob: {
        type: String
    },
    maritalStatus: {
        type: mongoose.Schema.ObjectId
    },
    mobileNo: {
        type: String
    },
    bloodGroup: {
        type: mongoose.Schema.ObjectId
    },
    emailId: {
        type: String
    },
    //Father's Details
    ffirstName: {
        type: String
    },
    flastName: {
        type: String
    },
    foccupation: {
        type: String
    },
    fannualIncome: {
        type: String
    },
    fmobileNo: {
        type: String
    },
    paadharNO: {
        type: String
    },
    //Mother's Detail
    mfirstName: {
        type: String
    },
    mlastName: {
        type: String
    },
    moccupation: {
        type: String
    },
    mannualIncome: {
        type: String
    },
    mmobileNo: {
        type: String
    },
    //
    nationality: {
        type: mongoose.Schema.ObjectId
    },
    religion: {
        type: mongoose.Schema.ObjectId
    },
    caste: {
        type: mongoose.Schema.ObjectId
    },
    community: {
        type: mongoose.Schema.ObjectId
    },
    //Admission
    institution: {
        type: mongoose.Schema.ObjectId
    },
    admissionCategory: {
        type: mongoose.Schema.ObjectId
    },
    admissionType: {
        type: mongoose.Schema.ObjectId
    },
    financialCategory: {
        type: String
    },
    boarding: {
        type: String
    },
    boardingStartDate: {
        type: String
    },
    //
    applicationNo: {
        type: String
    },
    admissionDate: {
        type: String
    },
    admissionNo: {
        type: String
    },
    joinDate: {
        type: String
    },
    referalType: {
        type: mongoose.Schema.ObjectId
    },
    referal: {
        type: String
    },
    motherTongue: {
        type: mongoose.Schema.ObjectId
    },
    secondLanguage: {
        type: mongoose.Schema.ObjectId
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
