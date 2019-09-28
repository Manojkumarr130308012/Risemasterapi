const diplomaDetailsSchema = require('../model/ce-qd-diplomadetails');
const errorHandler = require('../utils/error.handler');
const courseTypeSchema = require('./../model/courseType');
const mediumSchema = require('./../model/medium');
const institutionTypeSchema = require('./../model/institutionType');
class diplomaDeailsController{
	async add(newDetails){
		try{
			let response = await diplomaDetailsSchema.create(newDetails);
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
			let response = await diplomaDetailsSchema.find({'_id':id});
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
			let response = await diplomaDetailsSchema.find({});
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
			let response = await diplomaDetailsSchema.deleteOne({_id: id});
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
            let response = await diplomaDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
		try {
			
            let result1 =  await mediumSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
	
		let Medium =  await diplomaDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "media",
						localField: "diplomamedium",
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
			let CourseType =  await diplomaDetailsSchema.aggregate([
					{$lookup:
						  {
							from: "coursetypes",
							localField: "diplomacourseType",
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
				let InstitutionType =  await diplomaDetailsSchema.aggregate([
						{$lookup:
							  {
								from: "institutiontypes",
								localField: "diplomainstitutionType",
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
module.exports = new diplomaDeailsController();