const paymentDetailsSchema = require('../model/ce-paymentdetails');
const paymentMethodSchema = require('./../model/paymentMethod');
const errorHandler = require('../utils/error.handler');

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

        } catch (err) {
            return { status: "error", err: err };
        }

	}

	async aggregation() {
		try {
			
            let result =  await paymentMethodSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
		// return result;
		return  await paymentDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "paymentmethods",
						localField: "paymentmethod",
						foreignField: "_id",
						as: "paymentMethodDetails"
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