const addressTypeSchema = require('./../model/addressType');
const errorHandler = require('./../utils/error.handler');

class addressTypeController{
	async add(newAddress){
		try{
			let response = await addressTypeSchema.create(newAddress);
		
			return { status: "Success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await addressTypeSchema.find({});
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

	async fetchdata(id){
		try{
			let response = await addressTypeSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await addressTypeSchema.deleteOne({_id: id});
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
            let response = await addressTypeSchema.updateOne({_id: id}, body);
			return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

    }

}
module.exports = new addressTypeController();