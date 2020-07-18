const mongoose = require("mongoose");



const calenderSchema = new mongoose.Schema({
    
    institution: {
        type: mongoose.Schema.ObjectId,
         required: true
    },
    Date: {
        type: String,
        required: true
        
    },
    time: {
        type: String,
        required: true
        // required: true
    },
    eventname: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    photoLocation : {
        type: String
        
	}

})
module.exports = new mongoose.model('calenderdata', calenderSchema);