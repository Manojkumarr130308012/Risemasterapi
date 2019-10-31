const paymentDetailsSchema = require('../model/ce-paymentdetails');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class paymentDetailsController{
	async add(newDetails){
		try{
			let response = await paymentDetailsSchema.create(newDetails);
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
			let response = await paymentDetailsSchema.find({'_id':id});
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
			let response = await paymentDetailsSchema.find({});
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
			let response = await paymentDetailsSchema.deleteOne({_id: id});
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
            let response = await paymentDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async fetchpayment(canId){
		try{
			return await paymentDetailsSchema.aggregate([

				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{$lookup:
					{
					  from: "paymentmethods",
					  localField: "paymentmethod",
					  foreignField: "_id",
					  as: "paymentmethod"
					}
			   },			
			]);
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async aggregation() {
		try {
		
		return  await paymentDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "paymentmethods",
						localField: "paymentmethod",
						foreignField: "_id",
						as: "paymentmethod"
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
module.exports = new paymentDetailsController();