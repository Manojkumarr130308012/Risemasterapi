const admissionTypeSchema = require('./../model/admission-type');
const errorHandler = require('./../utils/error.handler');
const institutionSchema = require('./../model/institution');

class admissionTypeController{
	async add(newAdmissionType){
		try{
			let response = await admissionTypeSchema.create(newAdmissionType);

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
           return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

	}
	
	async aggregation() {
		try {
<<<<<<< HEAD
			
            let result =  await institutionSchema.aggregate([
				{$project: {
					_id:0
					
=======

            let result =  await institutionSchema.aggregate([
				{$project: {
					_id:0

>>>>>>> 7b45bc78965bc936277e217eb557415de518f76b
		 }}
		]);
		return  await admissionTypeSchema.aggregate([
				{$lookup:
					  {
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "InstitutionDetails"
					  }
<<<<<<< HEAD
				 },			 
				]);
=======
				 },				 
				]);

>>>>>>> 7b45bc78965bc936277e217eb557415de518f76b
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
<<<<<<< HEAD
=======

>>>>>>> 7b45bc78965bc936277e217eb557415de518f76b
}
module.exports = new admissionTypeController();