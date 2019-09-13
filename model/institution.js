const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema({
    institution_name: {
        type: String,
        required: true
    },
    institution_code: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    principal: {
        type: String,
        required: true
    },
    ao: {
        type: String,
        required: true
    },
    logoLocation : {
		type: String
	}
})
module.exports = new mongoose.model('institution', institutionSchema);