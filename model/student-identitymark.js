const mongoose = require("mongoose");

const studentIdentityMarkSchema = new mongoose.Schema({
   
    identityType: {
        type: String,
        required: true
    },
    markDetail: {
        type: String,
        required: true
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_identity_mark', studentIdentityMarkSchema);
