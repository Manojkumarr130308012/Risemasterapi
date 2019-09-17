const institutionSchema = require('./../model/institution');
const errorHandler = require('./../utils/error.handler');

class institutionController{
	async add(newinstitution){
		try{
			let response = await institutionSchema.create(newinstitution);
			
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
			let response = await institutionSchema.find({});
			return  response;
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await institutionSchema.deleteOne({_id: id});
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
            let response = await institutionSchema.updateOne({_id: id}, body);
			return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { 
                status: "error",
                 err: err 
                };
        }

    }
    async fetchdata(id){
		try{
			let response = await institutionSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

}
module.exports = new institutionController();