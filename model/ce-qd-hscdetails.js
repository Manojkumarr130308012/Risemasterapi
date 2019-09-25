const mongoose = require("mongoose");

const hscDetailsSchema = new mongoose.Schema({
    hsccourseType: {
        type: String,
        required: true
    },
    hscinstitutionType: {
        type: String,
        required: true
    },
    hscschoolCollege: {
        type: String,
        required: true
    },
    hscmedium: {
        type: String,
        required: true
    },
    hsccity: {
        type: String,
        required: true
    },
    hsctaluk: {
        type: String,
        required: true
    },
    hscdistrict: {
        type: String,
        required: true
    },
    hscstate: {
        type: String,
        required: true
    },
    hsccountry: {
        type: String,
        required: true
    },
    hscyearOfPassing: {
        type: String,
        required: true
    },
    hscmarkObtained: {
        type: String,
        required: true
    },
    hscmaxMark: {
        type: String,
        required: true
    },
    hscpercentage: {
        type: String,
        required: true
    },
    hscorganisationType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('ce-qd-hscDetail', hscDetailsSchema);