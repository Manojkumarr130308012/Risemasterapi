const mongoose = require('mongoose');



const designationSchema = new mongoose.Schema({
	 designationId: {
		 type: String,
		 required: true,
		 unique: true	
	 	
	 },
	designationName: {
		type: String,
		required: true
					
	}
});

module.exports = mongoose.model('userDesignation', designationSchema);

