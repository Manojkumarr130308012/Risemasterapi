const addressDetailsSchema = require('../model/ce-addressdetails');
const errorHandler = require('../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class addressDetailsController{
	async add(newDetail){
		try {
			let response = await addressDetailsSchema.create(newDetail);
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
	async fetchaddress(canId){	
		try{
			return await addressDetailsSchema.aggregate([

				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{
					$lookup:
					{
					  from: "addresstypes",
					  localField: "addresstype",
					  foreignField: "_id",
					  as: "AddressTypeDetails"
					}
			   },		
			]);
			
		} catch(error){
			return {
				status: "error",
				error: error
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

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	async aggregation() {
		try {
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