const studentQualifictaionSchema = require('./../model/student-qualification');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentQualificationController{
	async add(newDetail){
		try{
			let response = await studentQualifictaionSchema.create(newDetail);
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
			let response = await studentQualifictaionSchema.find({});
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
			let response = await studentQualifictaionSchema.find({'_id':id});
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
			let response = await studentQualifictaionSchema.deleteOne({_id: id});
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
            let response = await studentQualifictaionSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
		return  await studentQualifictaionSchema.aggregate([
			{
				$lookup:
				{
					from: "media",
					localField: "medium",
					foreignField: "_id",
					as: "medium"
				}
			},
			{
				$lookup:
				{
					from: "coursetypes",
					localField: "courseType",
					foreignField: "_id",
					as: "courseType"
				}
			},

			{
				$lookup:
				{
					from: "boards",
					localField: "board",
					foreignField: "_id",
					as: "board"
				}
			},

			{
				$lookup:
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
module.exports = new studentQualificationController();