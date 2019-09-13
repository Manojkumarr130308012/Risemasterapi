const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true
    },
    accountName: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    IFSCCode: {
        type: String,
        required: true
    },
    MICRCode: {
        type: String,
        required: true
    }
})
module.exports = new mongoose.model('bank', bankSchema);
