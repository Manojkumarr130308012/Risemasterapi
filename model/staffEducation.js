const mongoose = require("mongoose");

const staffEducationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    institutionType: {
        type: String,
        required: true
    },
    institutionName: {
        type: String,
        required: true
    },
    eyop: {
        type: String,
        required: true
    },
    modeOfStudy: {
        type: String,
        required: true
    },
    epercentage: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staffEducation', staffEducationSchema);
