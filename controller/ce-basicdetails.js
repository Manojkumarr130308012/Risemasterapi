const basicDetailsSchema = require('../model/ce-basicdetails');
const errorHandler = require('../utils/error.handler');

class basicDetailsController {

	async add(newDetails) {
		try {
			let response = await basicDetailsSchema.create(newDetails);

			return {	
				 response
			};


		} catch (error) {
			return {
				status: "error",
				error: error
			};
		}
	}


	async fetchdata(id) {
		try {
			let response = await basicDetailsSchema.find({ '_id': id });
			return response;

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch() {
		try {
			let response = await basicDetailsSchema.find({});
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

	async delete(id) {
		try {
			let response = await basicDetailsSchema.deleteOne({ _id: id });
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
			let response = await basicDetailsSchema.updateOne({ _id: id }, body);
			return { status: "success", result: response };

		} catch (error) {
			return { status: "error", error: error };
		}

	}
	async aggregation() {
		try {
			return await basicDetailsSchema.aggregate([
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
						from: "genders",
						localField: "gender",
						foreignField: "_id",
						as: "gender"
					}
				},
				{
					$lookup:
					{
						from: "admission-types",
						localField: "admissionType",
						foreignField: "_id",
						as: "admissionType"
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
						from: "referraltypes",
						localField: "referenceType",
						foreignField: "_id",
						as: "referenceType"
					}
				},
				{
					$lookup:
					{
						from: "scholarshipcategories",
						localField: "scholarshipCategory",
						foreignField: "_id",
						as: "scholarshipCategory"
					}
				},
				{
					$lookup:
					{
						from: "course-categories",
						localField: "coursecategory",
						foreignField: "_id",
						as: "coursecategory"
					}
				},
				{
					$lookup:
					{
						from: "course-programs",
						localField: "courseProgram",
						foreignField: "_id",
						as: "courseProgramDetails"
					}
				},
				{
					$lookup:
					{
						from: "nationalities",
						localField: "nationality",
						foreignField: "_id",
						as: "nationality"
					}
				},
				{
					$lookup:
					{
						from: "religions",
						localField: "religion",
						foreignField: "_id",
						as: "religion"
					}
				},
				{
					$lookup:
					{
						from: "communities",
						localField: "community",
						foreignField: "_id",
						as: "community"
					}
				},
				{
					$lookup:
					{
						from: "castes",
						localField: "caste",
						foreignField: "_id",
						as: "caste"
					}
				},
				{
					$lookup:
					{
						from: "admissioncategories",
						localField: "admissionCategory",
						foreignField: "_id",
						as: "admissionCategory"
					}
				},
				{
					$lookup:
					{
						from: "mothertongues",
						localField: "motherTongue",
						foreignField: "_id",
						as: "motherTongue"
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
module.exports = new basicDetailsController();