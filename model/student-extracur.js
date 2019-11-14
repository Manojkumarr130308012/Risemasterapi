const mongoose = require("mongoose");

const studentExtraSchema = new mongoose.Schema({
    activityCate: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    subCate: {
        type: mongoose.Schema.ObjectId
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
