const courseProgramSchema = require('./../model/course-program');
const errorHandler = require('../utils/error.handler');
const institutionSchema = require('./../model/institution');
// const courseCategorySchema = require('./../model/course-category');

class courseProgramController {
	async add(newCourseProgram) {
		try {
			let response = await courseProgramSchema.create(newCourseProgram);
			return { status: "success", result: response, message: "Added Successfully" };

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetch() {
		try {
			let response = await courseProgramSchema.find({});
			return {
				response: response
			};
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id) {
		try {
			let response = await courseProgramSchema.find({ '_id': id });
			return response;

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id) {
		try {
			let response = await courseProgramSchema.deleteOne({ _id: id });
			return {
				status: "success",
				response: response
			};
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

		try {
			let response = await courseProgramSchema.updateOne({ _id: id }, body);
			return { status: "success", result: response, message: "Updated Successfully" };

		} catch (error) {
			return { status: "error", error: error };
		}

	}
	async aggregation() {
		try {
			return await courseProgramSchema.aggregate([
				{
					$lookup:
					{
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "InstitutionDetails"
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
	async fetchByCouCate(coursecategory){
		try{
			let response = await courseProgramSchema.find({'coursecategory':coursecategory});
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


}
module.exports = new courseProgramController();