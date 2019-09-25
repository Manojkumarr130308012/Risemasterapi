const mongoose = require("mongoose");

const degreeDetailsSchema = new mongoose.Schema({
    degreecourseType: {
        type: String,
        required: true
    },
    degreeinstitutionType: {
        type: String,
        required: true
    },
    degreeschoolCollege: {
        type: String,
        required: true
    },
    degreemedium: {
        type: String,
        required: true
    },
    degreecity: {
        type: String,
        required: true
    },
    degreetaluk: {
        type: String,
        required: true
    },
    degreedistrict: {
        type: String,
        required: true
    },
    degreestate: {
        type: String,
        required: true
    },
    degreecountry: {
        type: String,
        required: true
    },
    degreeyearOfPassing: {
        type: String,
        required: true
    },
    degreemarkObtained: {
        type: String,
        required: true
    },
    degreemaxMark: {
        type: String,
        required: true
    },
    degreepercentage: {
        type: String,
        required: true
    },
    degreeorganisationType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('ce-qd-degreeDetail', degreeDetailsSchema);