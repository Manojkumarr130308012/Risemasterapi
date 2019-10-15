const mongoose = require("mongoose");

const staffCourseSchema = new mongoose.Schema({
    courseType: {
        type: String,
        required: true
    },
    cInstitutionType: {
        type: String,
        required: true
    },
    cInstitutionName: {
        type: String,
        required: true
    },
    modeOfCourse: {
        type: String,
        required: true
    },
    durationOfCourse: {
        type: String,
        required: true
    },
    uom: {
        type: String,
        required: true
    },
    cyop: {
        type: String,
        required: true
    },
    cpercentage: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staffCourse', staffCourseSchema);
