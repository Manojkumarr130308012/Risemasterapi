class ErrorHandler{
	parseMongoError(error){
		let errorMsg = 'Something went wrong';
		
		if(error.name !== 'MongoError' && error.name !== 'BulkWriteError'){
			return errorMsg;
		}

		else if(error.name == 'ValidationError'){
			let val='Validation Error';
			return val;
		}

		switch(error.code){			
			case 11000:
				errorMsg = 'Data already exist';
				break;	
				default:
					errorMsg=`${error.code} ~ ${error.errmsg}`;
		}
		//console.log(error.code);

		return errorMsg;		
	}
}

module.exports = new ErrorHandler();