const sslcDetailsSchema = require('../model/ce-qd-sslcdetails');
const errorHandler = require('../utils/error.handler');

class sslcDetailsController{
	async add(newDetails){
		try{
			let response = await sslcDetailsSchema.create(newDetails);
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
			let response = await sslcDetailsSchema.find({'_id':id});
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
			let response = await sslcDetailsSchema.find({});
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
			let response = await sslcDetailsSchema.deleteOne({_id: id});
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
            let response = await sslcDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (err) {
            return { status: "error", err: err };
        }

    }

}
module.exports = new sslcDetailsController();