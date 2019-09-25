const degreeDetailsSchema = require('../model/ce-qd-degreedetails');
const errorHandler = require('../utils/error.handler');

class degreeDetailsController{
	async add(newDetails){
		try{
			let response = await degreeDetailsSchema.create(newDetails);
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
			let response = await degreeDetailsSchema.find({'_id':id});
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
			let response = await degreeDetailsSchema.find({});
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
			let response = await degreeDetailsSchema.deleteOne({_id: id});
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
            let response = await degreeDetailsSchema.updateOne({_id: id}, body);
            return {
                 status: "success",
                  result: response 
                };

        } catch (err) {
            return { status: "error", err: err };
        }

    }

}
module.exports = new degreeDetailsController();