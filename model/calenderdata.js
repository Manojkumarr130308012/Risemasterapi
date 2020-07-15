const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const calenderSchema = new mongoose.Schema({
    
    institution: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    eventname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    photoLocation : {
		type: String
	}

})
module.exports = new mongoose.model('calender', calenderSchema);