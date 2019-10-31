const mongoose = require("mongoose");

const qualificationDetailsSchema = new mongoose.Schema({
    qualificationType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    courseType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    institutionType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    schoolCollege: {
        type: String,
        required: true
    },
    medium: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    taluk: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: true
    },
   state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    yearOfPassing: {
        type: String,
        required: true
    },
    markObtained: {
        type: String,
        required: false
    },
    maxMark: {
        type: String,
        required: false
    },
    percentage: {
        type: String,
        required: false
    },
    organisationType: {
        type: String,
        required: false
    },
    fileLocation : {
		type: String
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('ce_QualifictaionDetail', qualificationDetailsSchema);