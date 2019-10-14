const basicDetailsSchema = require('../model/ce-basicdetails');
const errorHandler = require('../utils/error.handler');

class basicDetailsController {

	async add(newDetails) {
		try {
			
			let countCEId = await basicDetailsSchema.aggregate([
				{ $count: "CEId" }
			]);

		//	console.log(countCEId);

			if(countCEId=="" || countCEId==null)
			{
				let SetCEId=1000;
				newDetails = { ...newDetails, ...{ CEId: SetCEId } }
			}
			else{
			let SetCEId = countCEId[0].CEId - 1;
			newDetails = { ...newDetails, ...{ CEId: SetCEId } }
			}

			let response = await basicDetailsSchema.create(newDetails);

			//	let userDetails = await user.save();


			return {
				status: "success",
				response: response
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
						as: "InstitutionDetails"
					}
				},
				{
					$lookup:
					{
						from: "genders",
						localField: "gender",
						foreignField: "_id",
						as: "GenderDetails"
					}
				},
				{
					$lookup:
					{
						from: "admission-types",
						localField: "admissionType",
						foreignField: "_id",
						as: "AdmissionTypeDetails"
					}
				},
				{
					$lookup:
					{
						from: "boards",
						localField: "board",
						foreignField: "_id",
						as: "BoardDetails"
					}
				},
				{
					$lookup:
					{
						from: "referraltypes",
						localField: "referenceType",
						foreignField: "_id",
						as: "ReferenceTypeDetails"
					}
				},
				{
					$lookup:
					{
						from: "scholarshipcategories",
						localField: "scholarshipCategory",
						foreignField: "_id",
						as: "scholarshipCategoryDetails"
					}
				},
				{
					$lookup:
					{
						from: "course-categories",
						localField: "coursecategory",
						foreignField: "_id",
						as: "courseCategoryDetails"
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
						as: "nationalityDetails"
					}
				},
				{
					$lookup:
					{
						from: "religions",
						localField: "religion",
						foreignField: "_id",
						as: "ReligionDetails"
					}
				},
				{
					$lookup:
					{
						from: "communities",
						localField: "community",
						foreignField: "_id",
						as: "communityDetails"
					}
				},
				{
					$lookup:
					{
						from: "castes",
						localField: "caste",
						foreignField: "_id",
						as: "casteDetails"
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