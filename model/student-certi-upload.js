const mongoose = require('mongoose');


const certificateUploadSchema = new mongoose.Schema({

	fileLocation : {
		type: String
	},
	
});

module.exports = mongoose.model('student-certificate', certificateUploadSchema);