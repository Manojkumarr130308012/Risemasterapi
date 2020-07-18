const mongoose = require('mongoose');


const uploadSchema = new mongoose.Schema({

	photoLocation : {
		type: String
	}
});

module.exports = mongoose.model('calenderfile', uploadSchema);