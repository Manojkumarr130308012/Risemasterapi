const mongoose = require("mongoose");

const studentIdentitySchema = new mongoose.Schema({
    identityType: {
        type: String
    },
    stuId: {
        type: mongoose.Schema.ObjectId
    }
})
module.exports = new mongoose.model('student_identity', studentIdentitySchema);
