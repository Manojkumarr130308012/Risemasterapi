const courseTypeSchema = require('./../model/courseType');
const errorHandler = require('./../utils/error.handler');
const qualificationTypeSchema = require('./../model/qualification-type');

class courseTypeController{
	async add(newAddress){
		try{
			let response = await courseTypeSchema.create(newAddress);
			
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
			let response = await courseTypeSchema.find({});
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
			let response = await courseTypeSchema.find({'_id':id});
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
			let response = await courseTypeSchema.deleteOne({_id: id});
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
            let response = await courseTypeSchema.updateOne({_id: id}, body);
			return { status: "success", result: response, message: "Updated Successfully" };
        } catch (err) {
            return { status: "error", err: err };
        }

	}
	async aggregation() {
		try {
			
            let result =  await qualificationTypeSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
		return  await courseTypeSchema.aggregate([
				{$lookup:
					  {
						from: "qualificationtypes",
						localField: "qualificationType",
						foreignField: "_id",
						as: "qualificationetypes"
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
	// async fetchbyQua(qualificationType){
	// 	try{
	// 		let response = await courseTypeSchema.find({'qualificationType':qualificationType});
	// 		return {
	// 			response: response
	// 		};
			
	// 	} catch(error){
	// 		return {
	// 			status: "error",
	// 			error: errorHandler.parseMongoError(error)
	// 		};
	// 	}
	// }
}
module.exports = new courseTypeController();