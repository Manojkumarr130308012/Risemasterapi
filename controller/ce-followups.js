const followupsSchema = require('../model/ce-followups');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class followupsController{
	async add(newDetail){
		try {
			let response = await followupsSchema.create(newDetail);
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
			let response = await followupsSchema.find({ _id :id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchfollowups(canId) {
		try {
			return  await followupsSchema.aggregate([
				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{$lookup:
					{
					  from: "modeof-enquiries",
					  localField: "modeOfEnquiry",
					  foreignField: "_id",
					  as: "modeOfEnquiry"
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
	async fetch(){
		try{
			return await followupsSchema.find({});
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await followupsSchema.deleteOne({_id: id});
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
            let response = await followupsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	
	async aggregation() {
		try {
		
		return  await followupsSchema.aggregate([
				{$lookup:
					  {
						from: "modeof-enquiries",
						localField: "modeOfEnquiry",
						foreignField: "_id",
						as: "modeOfEnquiry"
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
module.exports = new followupsController();