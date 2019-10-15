const mongoose = require('mongoose');


const studentPhotoSchema = new mongoose.Schema({

	sPhoto : {
		type: String
	}
});

module.exports = mongoose.model('student_photo_file', studentPhotoSchema);