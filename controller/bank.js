
const bankSchema = require('./../model/bank');
const errorHandler = require('./../utils/error.handler');

class bankController{
	async add(newBank){
		try{
			let response = await bankSchema.create(newBank);
		
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
			let response = await bankSchema.find({});
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
			let response = await bankSchema.find({'_id':id});
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
			let response = await bankSchema.deleteOne({_id: id});
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
            let response = await bankSchema.updateOne({_id: id}, body);
            return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

    }

}
module.exports = new bankController();