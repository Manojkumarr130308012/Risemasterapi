const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const designationSchema = new mongoose.Schema({
	// designationId: {
	// 	type: String,		
	// 	unique: true,
	// },
	designationName: {
		type: String,
		required: true,
		unique: true			
	}
});

module.exports = mongoose.model('userDesignation', designationSchema);

