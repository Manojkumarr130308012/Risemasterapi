const mongoose = require("mongoose");

const diplomaDetailsSchema = new mongoose.Schema({
    diplomacourseType: {
        type: String,
        required: true
    },
    diplomainstitutionType: {
        type: String,
        required: true
    },
    diplomaschoolCollege: {
        type: String,
        required: true
    },
    diplomamedium: {
        type: String,
        required: true
    },
    diplomacity: {
        type: String,
        required: true
    },
    diplomataluk: {
        type: String,
        required: true
    },
    diplomadistrict: {
        type: String,
        required: true
    },
    diplomastate: {
        type: String,
        required: true
    },
    diplomacountry: {
        type: String,
        required: true
    },
    diplomayearOfPassing: {
        type: String,
        required: true
    },
    diplomamarkObtained: {
        type: String,
        required: true
    },
    diplomamaxMark: {
        type: String,
        required: true
    },
    diplomapercentage: {
        type: String,
        required: true
    },
    diplomaorganisationType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('ce-qd-diplomaDetail', diplomaDetailsSchema);