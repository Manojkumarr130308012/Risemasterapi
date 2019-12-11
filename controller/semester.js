const semesterSchema = require('./../model/semester');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class semesterController{
	async add(newdetail){
		try{
			let response = await semesterSchema.create(newdetail);
            return  { 
                status: "success",
                 result: response,
                  message: "Added Successfully"
                 };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await semesterSchema.find({});
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
			let response = await semesterSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyIns(institution){
		try{
			let response = await semesterSchema.find({'institution':institution});
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

	async fetchbyAcademic(academicYear){	
		try{
			return await semesterSchema.aggregate([

				{
					$match: {
						academicYear: ObjectId(academicYear)
					}
				},

				
				{

					$lookup:
					{
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semesterd"
					}
				},

			]);
				// {
				// 	$lookup:
				// 	{
				// 		from: "institutions",
				// 		localField: "institution",
				// 		foreignField: "_id",
				// 		as: "institutiond"
				// 	}
				// },
				// {
				// 	$lookup:
				// 	{
				// 		from: "departments",
				// 		localField: "department",
				// 		foreignField: "_id",
				// 		as: "departmentd"
				// 	}
				// },
				// {
				// 	$lookup:
				// 	{
				// 		from: "course_programs",
				// 		localField: "courseprogram",
				// 		foreignField: "_id",
				// 		as: "courseprogramd"
				// 	}
				// },
				
				// {
				// 	$lookup:
				// 	{
				// 		from: "academicyears",
				// 		localField: "academicYear",
				// 		foreignField: "_id",
				// 		as: "academicYeard"
				// 	}
				// },
				// {
				// 	$lookup:
				// 	{
				// 		from: "batches",
				// 		localField: "batch",
				// 		foreignField: "_id",
				// 		as: "batchd"
				// 	}
				// },
			
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}

	async delete(id){
		try{
			let response = await semesterSchema.deleteOne({_id: id});
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
            let response = await semesterSchema.updateOne({_id: id}, body);
            return { 
                status: "success",
                 result: response, 
                 message: "Updated Successfully" 
                };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
			return await semesterSchema.aggregate([
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
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institutiond"
					}
				},
				{
					$lookup:
					{
						from: "academicyears",
						localField: "academicYear",
						foreignField: "_id",
						as: "academicYeard"
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
	async fetchbyAcademic(academicYear){
		try{
			return await semesterSchema.aggregate([

				{
					$match: {
						academicYear: ObjectId(academicYear)
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
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institution"
					}
				},
				{
					$lookup:
					{
						from: "academicyears",
						localField: "academicYear",
						foreignField: "_id",
						as: "academicYeard"
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
	async fetchbysemType(semesterType){
		try{
			return await semesterSchema.aggregate([

				{
					$match: {
						semesterType: ObjectId(semesterType)
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
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institution"
					}
				},
				{
					$lookup:
					{
						from: "academicyears",
						localField: "academicYear",
						foreignField: "_id",
						as: "academicYeard"
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
module.exports = new semesterController();