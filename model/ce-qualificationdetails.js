const mongoose = require("mongoose");

const sslcDetailsSchema = new mongoose.Schema({
    courseType: {
        type: String,
        required: true
    },
    institutionType: {
        type: String,
        required: true
    },
    schoolCollege: {
        type: String,
        required: true
    },
    medium: {
        type: String,
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
    sslcstate: {
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
    }
})
module.exports = new mongoose.model('ce-QualifictaionDetail', sslcDetailsSchema);