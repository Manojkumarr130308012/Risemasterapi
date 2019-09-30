const addressDetailsSchema = require('../model/ce-addressdetails');
const addressTypeSchema = require('./../model/addressType');
const errorHandler = require('../utils/error.handler');

class addressDetailsController{
	async add(newDetails){
		try{
			newDetails = {...newDetails, ...{userId: userSession.id}}
			let response = await addressDetailsSchema.create(newDetails);
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	

	async fetchdata(id){
		try{
			let response = await addressDetailsSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await addressDetailsSchema.find({});
			return {
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await addressDetailsSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async update(id, body) {

        try {
            let response = await addressDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (err) {
            return { status: "error", err: err };
        }

    }

	async aggregation() {
		try {
			
            let result =  await addressTypeSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
		// return result;
		return  await addressDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "addresstypes",
						localField: "addresstype",
						foreignField: "_id",
						as: "AddressTypeDetails"
					  }
				 },			 
				]);
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
}
module.exports = new addressDetailsController();