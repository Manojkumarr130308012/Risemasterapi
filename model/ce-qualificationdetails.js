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
        required: true
    },
    district: {
        type: String,
        required: true
    },
   state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    yearOfPassing: {
        type: String,
        required: true
    },
    markObtained: {
        type: String,
        required: true
    },
    maxMark: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
        required: true
    },
    organisationType: {
        type: String,
        required: true
    },
    canId: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})
module.exports = new mongoose.model('ce_QualifictaionDetail', qualificationDetailsSchema);