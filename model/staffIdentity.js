const mongoose = require("mongoose");

const staffIdentitySchema = new mongoose.Schema({
    identityType: {
        type: String,
        required: true
    },
    identityValue: {
        type: String,
        required: true
    },
    issueAuthority: {
        type: String,
        required: true
    },
    validFrom: {
        type: String,
        required: true
    },
    validTo: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('staffIdentity', staffIdentitySchema);
