const sslcDetailsSchema = require('../model/ce-qd-sslcdetails');
const errorHandler = require('../utils/error.handler');
const courseTypeSchema = require('./../model/courseType');
const mediumSchema = require('./../model/medium');
const institutionTypeSchema = require('./../model/institutionType');
class sslcDetailsController{
	async add(newDetails){
		try{
			let response = await sslcDetailsSchema.create(newDetails);
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
			let response = await sslcDetailsSchema.find({'_id':id});
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
			let response = await sslcDetailsSchema.find({});
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
			let response = await sslcDetailsSchema.deleteOne({_id: id});
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
            let response = await sslcDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

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
	
		let Medium =  await sslcDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "media",
						localField: "sslcmedium",
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
			let CourseType =  await sslcDetailsSchema.aggregate([
					{$lookup:
						  {
							from: "coursetypes",
							localField: "sslccourseType",
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
				let InstitutionType =  await sslcDetailsSchema.aggregate([
						{$lookup:
							  {
								from: "institutiontypes",
								localField: "sslcinstitutionType",
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
module.exports = new sslcDetailsController();