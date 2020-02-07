const academicYearSchema = require('./../model/academicYear');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class academicYearController{
	async add(newYear){
		try{
			let response = await academicYearSchema.create(newYear);

			return { status: "success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetchdata(id){
		try{
			let response = await academicYearSchema.find({'_id':id});
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
			let response = await academicYearSchema.find({});
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
			let response = await academicYearSchema.deleteOne({_id: id});
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
            let response = await academicYearSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
			return await academicYearSchema.aggregate([
				{
					$lookup:
					{
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institutiond"
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogramd"
					}
				},
				{
					$lookup:
					{
						from: "batches",
						localField: "batch",
						foreignField: "_id",
						as: "batchd"
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
	async fetchbyIns(institution){
		try{
			let response = await academicYearSchema.find({'institution':institution});
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
	async fetchbybatch(batch){
		try{
			return await academicYearSchema.aggregate([

				{
					$match: {
						batch: ObjectId(batch)
					}
				},
				{
					$lookup:
					{
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institutiond"
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogramd"
					}
				},
				{
					$lookup:
					{
						from: "batches",
						localField: "batch",
						foreignField: "_id",
						as: "batchd"
					}
				},
			]);
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbycourseprogram(courseprogram){
		try{
			return await academicYearSchema.aggregate([

				{
					$match: {
						courseprogram: ObjectId(courseprogram)
					}
				},
				{
					$lookup:
					{
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institutiond"
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogramd"
					}
				},
				{
					$lookup:
					{
						from: "batches",
						localField: "batch",
						foreignField: "_id",
						as: "batchd"
					}
				},
			]);
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

}
module.exports = new academicYearController();