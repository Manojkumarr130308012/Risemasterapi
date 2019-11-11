const mongoose = require("mongoose");

const studentGuardianSchema = new mongoose.Schema({
    relationship: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    addressType: {
        type: String
    },
    flatNo: {
        type: String
    },
    areaLocality: {
        type: String
    },
    mobileNo: {
        type: String
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    pincode: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    }
})
module.exports = new mongoose.model('student_guardian', studentGuardianSchema);
