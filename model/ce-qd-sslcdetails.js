const mongoose = require("mongoose");

const sslcDetailsSchema = new mongoose.Schema({
    sslccourseType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    sslcinstitutionType: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    sslcschoolCollege: {
        type: String,
        required: true
    },
    sslcmedium: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    sslccity: {
        type: String,
        required: true
    },
    sslctaluk: {
        type: String,
        required: true
    },
    sslcdistrict: {
        type: String,
        required: true
    },
    sslcstate: {
        type: String,
        required: true
    },
    sslccountry: {
        type: String,
        required: true
    },
    sslcyearOfPassing: {
        type: String,
        required: true
    },
    sslcmarkObtained: {
        type: String,
        required: true
    },
    sslcmaxMark: {
        type: String,
        required: true
    },
    sslcpercentage: {
        type: String,
        required: true
    },
    sslcorganisationType: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('ce-qd-sslcDetail', sslcDetailsSchema);