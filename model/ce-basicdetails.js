const mongoose = require("mongoose");
var Schema = mongoose.Schema;

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
       
    },
    regNo12th: {
        type: String,
        
    },
    mark12th: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    sMobileNumber: {
        type: String,
       
    },
    fFirstName: {
        type: String,
       
    },
    fLastName: {
        type: String,
        
    },
    fMobileNumber: {
        type: String,
        
    },
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true 
    },
    board: {
        type: mongoose.Schema.ObjectId,
       
    },
    referenceType: {
        type: mongoose.Schema.ObjectId,
        required: true 
    },
    referenceBy: {
        type: String,
       
    },
    applicatonNo: {
        type: String,
        required: true 
    },
    admissiontype: {
        type: mongoose.Schema.ObjectId,
        required: true 
    },
    admissionCategory: {
        type: mongoose.Schema.ObjectId,
        required: true  
    },
    scholarshipCategory: {
        type: mongoose.Schema.ObjectId,
       
    },
    remark: {
        type: String,
        
    },
    nationality: {
        type: mongoose.Schema.ObjectId,
    },
    religion: {
        type: mongoose.Schema.ObjectId,
       
    },
    community: {
        type: mongoose.Schema.ObjectId,
       
    },
    caste: {
        type: mongoose.Schema.ObjectId,
       
    },
    motherTongue: {
        type: mongoose.Schema.ObjectId,
       
    },
    fEmail: {
        type: String,
      
    },
    fOccupation: {
        type: String,
        
    },
    fAnnualIncome: {
        type: String,
       
    },
    mName: {
        type: String,
    },
    mEmail: {
        type: String,
        
    },
    mMobileNo: {
        type: String,
       
    },
    mOccupation: {
        type: String,
        
    },
    mAnnualIncome: {
        type: String,
     
    },
    pPanNumber: {
        type: String,
      
    },
    pAadharNumber: {
        type: String,
       
    },
    relativeName: {
        type: String
    },
    academicYear: {
        type: mongoose.Schema.ObjectId,
        required: true 
    },
    sPhoto: {
        type: String
    },
    enquiryDate: {
        type: String
    },
    status: {
        type: String
    }
})


module.exports = new mongoose.model('ce_basicdetail', basicDetailsSchema);

