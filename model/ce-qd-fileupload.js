const mongoose = require('mongoose');


const uploadSchema = new mongoose.Schema({

	photoLocation : {
		type: String
    },
});

module.exports = mongoose.model('ce_qd_File', uploadSchema);