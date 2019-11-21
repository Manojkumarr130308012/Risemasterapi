const basicDetailsSchema = require('../model/ce-basicdetails');
const errorHandler = require('../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class basicDetailsController {
	async add(newDetail) {
		try {
			let response = await basicDetailsSchema.create(newDetail);
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
			return await basicDetailsSchema.aggregate([
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
						from: "genders",
						localField: "gender",
						foreignField: "_id",
						as: "genderd"
					}
				},
				{
					$lookup:
					{
						from: "admission-types",
						localField: "admissiontype",
						foreignField: "_id",
						as: "admissiontyped"
					}
				},
				{
					$lookup:
					{
						from: "boards",
						localField: "board",
						foreignField: "_id",
						as: "boardd"
					}
				},
				{
					$lookup:
					{
						from: "referraltypes",
						localField: "referenceType",
						foreignField: "_id",
						as: "referenceTyped"
					}
				},
				{
					$lookup:
					{
						from: "scholarshipcategories",
						localField: "scholarshipCategory",
						foreignField: "_id",
						as: "scholarshipCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "nationalities",
						localField: "nationality",
						foreignField: "_id",
						as: "nationalityd"
					}
				},
				{
					$lookup:
					{
						from: "religions",
						localField: "religion",
						foreignField: "_id",
						as: "religiond"
					}
				},
				{
					$lookup:
					{
						from: "communities",
						localField: "community",
						foreignField: "_id",
						as: "communityd"
					}
				},
				{
					$lookup:
					{
						from: "castes",
						localField: "caste",
						foreignField: "_id",
						as: "casted"
					}
				},
				{
					$lookup:
					{
						from: "admissioncategories",
						localField: "admissionCategory",
						foreignField: "_id",
						as: "admissionCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "mothertongues",
						localField: "motherTongue",
						foreignField: "_id",
						as: "motherTongued"
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
						from: "ce_paymentdetails",
						localField: "_id",
						foreignField: "canId",
						as: "PaymentDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_addressdetails",
						localField: "_id",
						foreignField: "canId",
						as: "AddressDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_qualifictaiondetails",
						localField: "_id",
						foreignField: "canId",
						as: "QualificationDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_followups",
						localField: "_id",
						foreignField: "canId",
						as: "FollowupsDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_converttostudents",
						localField: "_id",
						foreignField: "canId",
						as: "ConvertToStudentDetails"
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

	async fetchbyBatch(batch) {
		try {
			return await basicDetailsSchema.aggregate([
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
						from: "genders",
						localField: "gender",
						foreignField: "_id",
						as: "genderd"
					}
				},
				{
					$lookup:
					{
						from: "admission-types",
						localField: "admissiontype",
						foreignField: "_id",
						as: "admissiontyped"
					}
				},
				{
					$lookup:
					{
						from: "boards",
						localField: "board",
						foreignField: "_id",
						as: "boardd"
					}
				},
				{
					$lookup:
					{
						from: "referraltypes",
						localField: "referenceType",
						foreignField: "_id",
						as: "referenceTyped"
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
						from: "scholarshipcategories",
						localField: "scholarshipCategory",
						foreignField: "_id",
						as: "scholarshipCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "nationalities",
						localField: "nationality",
						foreignField: "_id",
						as: "nationalityd"
					}
				},
				{
					$lookup:
					{
						from: "religions",
						localField: "religion",
						foreignField: "_id",
						as: "religiond"
					}
				},
				{
					$lookup:
					{
						from: "communities",
						localField: "community",
						foreignField: "_id",
						as: "communityd"
					}
				},
				{
					$lookup:
					{
						from: "castes",
						localField: "caste",
						foreignField: "_id",
						as: "casted"
					}
				},
				{
					$lookup:
					{
						from: "admissioncategories",
						localField: "admissionCategory",
						foreignField: "_id",
						as: "admissionCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "mothertongues",
						localField: "motherTongue",
						foreignField: "_id",
						as: "motherTongued"
					}
				},
				{
					$lookup:
					{
						from: "ce_paymentdetails",
						localField: "_id",
						foreignField: "canId",
						as: "PaymentDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_addressdetails",
						localField: "_id",
						foreignField: "canId",
						as: "AddressDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_qualifictaiondetails",
						localField: "_id",
						foreignField: "canId",
						as: "QualificationDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_followups",
						localField: "_id",
						foreignField: "canId",
						as: "FollowupsDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_converttostudents",
						localField: "_id",
						foreignField: "canId",
						as: "ConvertToStudentDetails"
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
						from: "academicyears",
						localField: "academicYear",
						foreignField: "_id",
						as: "academicYeard"
					}
				},
				{
					$lookup:
					{
						from: "admission-types",
						localField: "admissiontype",
						foreignField: "_id",
						as: "admissiontype"
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
				{
					$lookup:
					{
						from: "ce_paymentdetails",
						localField: "_id",
						foreignField: "canId",
						as: "PaymentDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_addressdetails",
						localField: "_id",
						foreignField: "canId",
						as: "AddressDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_qualifictaiondetails",
						localField: "_id",
						foreignField: "canId",
						as: "QualificationDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_followups",
						localField: "_id",
						foreignField: "canId",
						as: "FollowupsDetails"
					}
				},
				{
					$lookup:
					{
						from: "ce_converttostudents",
						localField: "_id",
						foreignField: "canId",
						as: "ConvertToStudentDetails"
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
	async fetchReportbyDate(filterReportbyDate) {
		// console.log('fetchReportbyDate', filterReportbyDate);
		try {
			let institution = filterReportbyDate.institution;
			let coursecategory = filterReportbyDate.coursecategory;
			let courseprogram = filterReportbyDate.courseprogram;
			let admissiontype = filterReportbyDate.admissiontype;
			let academicYear = filterReportbyDate.academicYear;
			let fromDate = filterReportbyDate.fromDate;
			let toDate = filterReportbyDate.toDate;
			let confirmedStatus = filterReportbyDate.confirmedStatus;

			let id = filterReportbyDate._id;
			return await basicDetailsSchema.aggregate([

				{

					$match: {
						//institution: ObjectId(institution),
						// coursecategory: ObjectId(coursecategory),
						// courseprogram: ObjectId(courseprogram),
						//enquiryDate: { "$gte": fromDate, "$lt": toDate },
						//admissiontype: ObjectId(admissiontype),
						//academicYear: ObjectId(academicYear),
						//status: confirmedStatus
						// _id: ObjectId(id)						


					}
				},



				{
					"$lookup": {
						"from": "cecourseprograms",
						"let": { "canId": ObjectId(id), "coursecategory": ObjectId(coursecategory), "courseprogram": ObjectId(courseprogram) },
						"pipeline": [
							{
								"$match": {
									"$expr": {
										"$and": [
											{ "$eq": ["$canId", "$$canId"] },
											{ "$eq": ["$coursecategory", "$$coursecategory"] },
											{ "$eq": ["$courseprogram", "$$courseprogram"] }
										]
									}
								}
							}
						],
						"as": "CourseDetails"
					}
				},







				/*	{ $lookup: { from: "cecourseprograms", localField: "_id", foreignField: "canId", as: "CourseCatPrgmDetail" } },
				   {
					   $project: {
						   posts: {
							   $filter: {
								   input: "$CourseCatPrgmDetail", as: "post", cond: {
									   $eq: ['$$post.coursecategory', ObjectId(coursecategory)],
									   $eq: ['$$post.courseprogram', ObjectId(courseprogram)]
								   }
							   }
						   }
   
					   }
				   },*/

				{

					$lookup:
					{
						from: "cecourseprograms",
						localField: "_id",
						foreignField: "canId",
						as: "CourseCatPrgmDetail"
					}

				},
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
						from: "academicyears",
						localField: "academicYear",
						foreignField: "_id",
						as: "academicYearDetails"
					}
				},

				{
					$lookup:

					{
						from: "admission-types",
						localField: "admissiontype",
						foreignField: "_id",
						as: "AdmissiontypeDetails"
					}
				},
				{
					$lookup:
					{
						from: "genders",
						localField: "gender",
						foreignField: "_id",
						as: "genderd"
					}
				},
				{
					$lookup:
					{
						from: "boards",
						localField: "board",
						foreignField: "_id",
						as: "boardd"
					}
				},
				{
					$lookup:
					{
						from: "referraltypes",
						localField: "referenceType",
						foreignField: "_id",
						as: "referenceTyped"
					}
				},
				{
					$lookup:
					{
						from: "scholarshipcategories",
						localField: "scholarshipCategory",
						foreignField: "_id",
						as: "scholarshipCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "nationalities",
						localField: "nationality",
						foreignField: "_id",
						as: "nationalityd"
					}
				},
				{
					$lookup:
					{
						from: "religions",
						localField: "religion",
						foreignField: "_id",
						as: "religiond"
					}
				},
				{
					$lookup:
					{
						from: "communities",
						localField: "community",
						foreignField: "_id",
						as: "communityd"
					}
				},
				{
					$lookup:
					{
						from: "castes",
						localField: "caste",
						foreignField: "_id",
						as: "casted"
					}
				},
				{
					$lookup:
					{
						from: "admissioncategories",
						localField: "admissionCategory",
						foreignField: "_id",
						as: "admissionCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "mothertongues",
						localField: "motherTongue",
						foreignField: "_id",
						as: "motherTongued"
					}
				},
			]);


		} catch (error) {
			return {
				status: "error",
				error: error
			};
		}
	}

}
module.exports = new basicDetailsController();