const sectionSchema = require('./../model/section');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class sectionController{
	async add(newdetail){
		try{
			let response = await sectionSchema.create(newdetail);
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
			let response = await sectionSchema.find({});
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
			return await sectionSchema.aggregate([

				{
					$match: {
						_id: ObjectId(id)
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "departmentd"
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
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semesterd"
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
				error: error
			};
		}
	}

	async fetchbyIns(institution){
		try{
			let response = await sectionSchema.find({'institution':institution});
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
			let response = await sectionSchema.deleteOne({_id: id});
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
            let response = await sectionSchema.updateOne({_id: id}, body);
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
           return  await sectionSchema.aggregate([
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
					   from: "departments",
					   localField: "department",
					   foreignField: "_id",
					   as: "departmentd"
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
	async fetchbycourseprogram(courseprogram){	
		try{
			return await sectionSchema.aggregate([

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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "departmentd"
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
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semesterd"
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
				error: error
			};
		}
	}
	async fetchbyAcademic(academicYear){	
		try{
			return await sectionSchema.aggregate([

				{
					$match: {
						academicYear: ObjectId(academicYear)
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "departmentd"
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
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semesterd"
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
				error: error
			};
		}
	}
	async fetchbySemester(semester){	
		try{
			return await sectionSchema.aggregate([

				{
					$match: {
						semester: ObjectId(semester)
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "departmentd"
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
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semesterd"
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
				error: error
			};
		}
	}
}
module.exports = new sectionController();