const admissionCategorySchema = require('./../model/admissionCategory');
const errorHandler = require('./../utils/error.handler');

class admissionCategoryController{
	async add(newAdmissionCategory){
		try{
			let response = await admissionCategorySchema.create(newAdmissionCategory);
			
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
			let response = await admissionCategorySchema.find({});
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
			let response = await admissionCategorySchema.find({'_id':id});
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
			let response = await admissionCategorySchema.deleteOne({_id: id});
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
            let response = await admissionCategorySchema.updateOne({_id: id}, body);
			return { status: "success", result: response, message: "Updated Successfully" };
        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async fetchbyIns(institution){
		try{
			let response = await admissionCategorySchema.find({'institution':institution});
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
	async aggregation() {
		try {
		return  await admissionCategorySchema.aggregate([
				{$lookup:
					  {
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "InstitutionDetails"
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
module.exports = new admissionCategoryController();