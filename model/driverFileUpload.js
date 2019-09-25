const mongoose = require('mongoose');


const uploadSchema = new mongoose.Schema({

	photoLocation : {
		type: String
	},
	fileLocation : {
		type: String
	}
});

module.exports = mongoose.model('driver-file', uploadSchema);