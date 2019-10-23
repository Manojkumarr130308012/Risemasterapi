const qualificationDetailsSchema = require('../model/ce-qualificationdetails');
const errorHandler = require('../utils/error.handler');
class qualificationDetailsController{
	async add(newDetails){
		try{
			let response = await qualificationDetailsSchema.create(newDetails);
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
	

	async fetchdata(id){
		try{
			let response = await qualificationDetailsSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await qualificationDetailsSchema.find({});
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

	async delete(id){
		try{
			let response = await qualificationDetailsSchema.deleteOne({_id: id});
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
            let response = await qualificationDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
		try {
			return await qualificationDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "media",
						localField: "sslcmedium",
						foreignField: "_id",
						as: "MediumDetails"
					  }
				 },
					{$lookup:
						  {
							from: "coursetypes",
							localField: "sslccourseType",
							foreignField: "_id",
							as: "CourseTypeDetails"
						  }
					 },			 
					
						{$lookup:
							  {
								from: "institutiontypes",
								localField: "sslcinstitutionType",
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
module.exports = new qualificationDetailsController();