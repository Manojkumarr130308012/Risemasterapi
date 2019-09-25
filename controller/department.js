const departmentSchema = require('./../model/department');
const errorHandler = require('../utils/error.handler');
const institutionSchema = require('./../model/institution');

class departmentController{
	async add(newDepartment){
		try{
			let response = await departmentSchema.create(newDepartment);
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
			let response = await departmentSchema.find({});
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
			let response = await departmentSchema.find({'_id':id});
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
			let response = await departmentSchema.deleteOne({_id: id});
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
            let response = await departmentSchema.updateOne({_id: id}, body);
           return { status: "success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

	}
	
	async aggregation() {
        try {
			let result1 =  await institutionSchema.aggregate([

				{$project: {
						_id:0
	
					   }}
					
				]);

           return  await departmentSchema.aggregate([

			{$lookup:

					{
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "InstitutionDetails"
					}}
					
				]);

        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
	}

}
module.exports = new departmentController();