const convertSchema = require('../model/ce-converttostudent');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class convertController{
	async add(newDetail){
		try {
			let response = await convertSchema.create(newDetail);
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
			let response = await convertSchema.find({ _id :id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchconvert(canId) {
		try {
			return  await convertSchema.aggregate([
				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogram"
					}
				},
				{
					$lookup:
					{
						from: "batches",
						localField: "batch",
						foreignField: "_id",
						as: "batch"
					}
				},
				{
					$lookup:
					{
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semester"
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
			return await convertSchema.find({});
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await convertSchema.deleteOne({_id: id});
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
            let response = await convertSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	
	async aggregation() {
		try {
		
            return await convertSchema.aggregate([
                {$lookup:
					{
					  from: "course_programs",
					  localField: "courseprogram",
					  foreignField: "_id",
					  as: "courseprogram"
					}
			   },
                {
                    $lookup:
                    {
                        from: "batches",
                        localField: "batch",
                        foreignField: "_id",
                        as: "batch"
                    }
				},
				{
					$lookup:
					{
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semester"
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
module.exports = new convertController();