const qualificationDetailsSchema = require('../model/ce-qualificationdetails');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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
	async fetchqualification(canId) {
		try {
			return await qualificationDetailsSchema.aggregate([
				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{$lookup:
					  {
						from: "media",
						localField: "medium",
						foreignField: "_id",
						as: "medium"
					  }
				 },
					{$lookup:
						  {
							from: "coursetypes",
							localField: "courseType",
							foreignField: "_id",
							as: "courseType"
						  }
					 },			 
					
						{$lookup:
							  {
								from: "institutiontypes",
								localField: "institutionType",
								foreignField: "_id",
								as: "institutionType"
							  }
						 },	
						 
						{$lookup:
							{
							  from: "qualificationtypes",
							  localField: "qualificationType",
							  foreignField: "_id",
							  as: "qualificationType"
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
	async aggregation() {
		try {
			return await qualificationDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "media",
						localField: "medium",
						foreignField: "_id",
						as: "medium"
					  }
				 },
					{$lookup:
						  {
							from: "coursetypes",
							localField: "courseType",
							foreignField: "_id",
							as: "courseType"
						  }
					 },			 
					
						{$lookup:
							  {
								from: "institutiontypes",
								localField: "institutionType",
								foreignField: "_id",
								as: "institutionType"
							  }
						 },	
						 
						{$lookup:
							{
							  from: "qualificationtypes",
							  localField: "qualificationType",
							  foreignField: "_id",
							  as: "qualificationType"
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