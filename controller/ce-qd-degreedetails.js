const degreeDetailsSchema = require('../model/ce-qd-degreedetails');
const errorHandler = require('../utils/error.handler');
const courseTypeSchema = require('./../model/courseType');
const mediumSchema = require('./../model/medium');
const institutionTypeSchema = require('./../model/institutionType');
class degreeDetailsController{
	async add(newDetails){
		try{
			let response = await degreeDetailsSchema.create(newDetails);
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
			let response = await degreeDetailsSchema.find({'_id':id});
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
			let response = await degreeDetailsSchema.find({});
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
			let response = await degreeDetailsSchema.deleteOne({_id: id});
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
            let response = await degreeDetailsSchema.updateOne({_id: id}, body);
            return {
                 status: "success",
                  result: response 
                };

        } catch (err) {
            return { status: "error", err: err };
        }

	}
	async aggregation() {
		try {
			
            let result1 =  await mediumSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
	
		let Medium =  await degreeDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "media",
						localField: "degreemedium",
						foreignField: "_id",
						as: "MediumDetails"
					  }
				 },			 
				]);
				let result2 =  await courseTypeSchema.aggregate([
					{$project: {
						_id:0
						
			 }}
			]);
			// return result;
			let CourseType =  await degreeDetailsSchema.aggregate([
					{$lookup:
						  {
							from: "coursetypes",
							localField: "degreecourseType",
							foreignField: "_id",
							as: "CourseTypeDetails"
						  }
					 },			 
					]);
					let result3 =  await institutionTypeSchema.aggregate([
						{$project: {
							_id:0
							
				 }}
				]);
				// return result;
				let InstitutionType =  await degreeDetailsSchema.aggregate([
						{$lookup:
							  {
								from: "institutiontypes",
								localField: "degreeinstitutionType",
								foreignField: "_id",
								as: "InstitutionDetails"
							  }
						 },			 
						]);
				return {
					CourseType,
					Medium,
					InstitutionType
				}
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }

}
module.exports = new degreeDetailsController();