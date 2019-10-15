const qualificationTypeSchema = require('./../model/qualification-type');
const errorHandler = require('./../utils/error.handler');

class qualificationTypeController{
	async add(newAdmissionCategory){
		try{
			let response = await qualificationTypeSchema.create(newAdmissionCategory);
			
			return { status: "success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	
	async fetch(){
		try{
			let response = await qualificationTypeSchema.find({});
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
			let response = await qualificationTypeSchema.find({'_id':id});
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
			let response = await qualificationTypeSchema.deleteOne({_id: id});
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
            let response = await qualificationTypeSchema.updateOne({_id: id}, body);
			return { status: "success", result: response, message: "Updated Successfully" };
        } catch (error) {
            return { status: "error", error: error };
        }

	}
}
module.exports = new qualificationTypeController();