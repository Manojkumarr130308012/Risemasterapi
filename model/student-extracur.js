const mongoose = require("mongoose");

const studentExtraSchema = new mongoose.Schema({
    activityCate: {
        type: String
    },
    subCate: {
        type: String
    },
    level: {
        type: String
    },
    fromDate: {
        type: String
    },
    toDate: {
        type: String
    },
    year: {
        type: String
    },
    venue: {
        type: String
    },
    description: {
        type: String
    },
    awardDetail: {
        type: String
    },
    remark: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_Extra', studentExtraSchema);
