const scholarshipCategorySchema = require('./../model/scholarshipCategory');
const errorHandler = require('./../utils/error.handler');

class scholarshipCategoryController{
	async add(newAddress){
		try{
			let response = await scholarshipCategorySchema.create(newAddress);
            
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
			let response = await scholarshipCategorySchema.find({});
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
			let response = await scholarshipCategorySchema.find({'_id':id});
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
			let response = await scholarshipCategorySchema.deleteOne({_id: id});
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
            let response = await scholarshipCategorySchema.updateOne({_id: id}, body);
			return { status: "Success", result: response, message: "Updated Successfully" };
        } catch (err) {
            return {
                 status: "error",
                  err: err 
                };
        }

    }

}
module.exports = new scholarshipCategoryController();