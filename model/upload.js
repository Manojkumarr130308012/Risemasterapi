const mongoose = require('mongoose');


const uploadSchema = new mongoose.Schema({

	logoLocation : {
		type: String
	}
});

module.exports = mongoose.model('upload', uploadSchema);