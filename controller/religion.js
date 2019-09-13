const religionSchema = require('./../model/religion');
const errorHandler = require('./../utils/error.handler');

class religionController{
	async add(newReligion){
		try{
			let response = await religionSchema.create(newReligion);
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
			let response = await religionSchema.find({});
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
			let response = await religionSchema.find({'_id':id});
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
			let response = await religionSchema.deleteOne({_id: id});
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
            let response = await religionSchema.updateOne({_id: id}, body);
            return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

    }

}
module.exports = new religionController();