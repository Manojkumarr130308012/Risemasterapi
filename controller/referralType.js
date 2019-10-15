const referralTypeSchema = require('./../model/referralType');
const errorHandler = require('./../utils/error.handler');

class referralTypeController{
	async add(newAddress){
		try{
			let response = await referralTypeSchema.create(newAddress);
			
			return { status: "success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await referralTypeSchema.find({});
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
			let response = await referralTypeSchema.find({'_id':id});
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
			let response = await referralTypeSchema.deleteOne({_id: id});
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
            let response = await referralTypeSchema.updateOne({_id: id}, body);
			return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return {
                 status: "error",
                  error: error 
                };
        }

    }

}
module.exports = new referralTypeController();