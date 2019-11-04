const basicDetailsSchema = require('../model/ce-basicdetails');
const errorHandler = require('../utils/error.handler');


const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class basicDetailsController{
	async add(newDetail){
		try {
			return await basicDetailsSchema.create(newDetail);
			
			 
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	

	async fetchdata(id){
		try{
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
			]);
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await basicDetailsSchema.find({});
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
			let response = await basicDetailsSchema.deleteOne({_id: id});
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
            let response = await basicDetailsSchema.updateOne({_id: id}, body);
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