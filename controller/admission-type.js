const admissionTypeSchema = require('./../model/admission-type');
const errorHandler = require('./../utils/error.handler');

class admissionTypeController{
	async add(newAdmissionType){
		try{
			let response = await admissionTypeSchema.create(newAdmissionType);

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
			let response = await admissionTypeSchema.find({});
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
			let response = await admissionTypeSchema.find({'_id':id});
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
			console.log('id2',id)
			let response = await admissionTypeSchema.deleteOne({_id: id});
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
            let response = await admissionTypeSchema.updateOne({_id: id}, body);
           return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async fetchbyIns(institution){
		try{
			let response = await admissionTypeSchema.find({'institution':institution});
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
		return  await admissionTypeSchema.aggregate([
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
module.exports = new admissionTypeController();