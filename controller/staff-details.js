const staffDetailsSchema = require('./../model/staff-details');
const errorHandler = require('./../utils/error.handler');
const staffTypeSchema = require('./../model/staff-type');
const genderSchema = require('./../model/gender');
const staffRoleSchema = require('./../model/staff-role');
const salutationSchema = require('./../model/salutation');
const payTypeSchema = require('./../model/pay-type');
const maritalStatusSchema = require('./../model/marital-status');
const bloodgroupSchema = require('./../model/bloodgroup');

class staffDetailsController{
	async add(newStaffDetails){
		try{
			let response = await staffDetailsSchema.create(newStaffDetails);
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
			let response = await staffDetailsSchema.find({});
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

    async fetchbyProfileId(IdValue){
		try{
			let response = await staffDetailsSchema.find({'IdValue':IdValue});
			console.log('veh',response);
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
			let response = await staffDetailsSchema.find({'_id':id});
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
			let response = await staffDetailsSchema.deleteOne({_id: id});
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
            let response = await staffDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

	}
	
	async aggregation() {
		try {

			let result1 = await staffTypeSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let stafftype = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "staff-types",
						localField: "stafftype",
						foreignField: "_id",
						as: "StaffTypeDetails"
					}
				},
			]);
			let result2 = await staffRoleSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let staffrole = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "staff-roles",
						localField: "staffrole",
						foreignField: "_id",
						as: "StaffRoleDetails"
					}
				},
			]);
			let result3 = await salutationSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let salutation = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "salutations",
						localField: "salutation",
						foreignField: "_id",
						as: "salutationDetails"
					}
				},
			]);
			let result4 = await genderSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let gender = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "genders",
						localField: "gender",
						foreignField: "_id",
						as: "GenderDetails"
					}
				},
			]);
			let result5 = await payTypeSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let paytype = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "pay-types",
						localField: "paytype",
						foreignField: "_id",
						as: "PayTypeDetails"
					}
				},
			]);
			let result6 = await maritalStatusSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let maritalstatus = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "marital-statuses",
						localField: "maritalstatus",
						foreignField: "_id",
						as: "MaritalStatusDetails"
					}
				},
			]);
			let result7 = await bloodgroupSchema.aggregate([
				{
					$project: {
						_id: 0

					}
				}
			]);
			let bloodgroup = await staffDetailsSchema.aggregate([
				{
					$lookup:
					{
						from: "bloodgroups",
						localField: "bloodgroup",
						foreignField: "_id",
						as: "BloodGroupDetails"
					}
				},
			]);
			return {
				stafftype,
				 staffrole,
				 salutation,
				 gender,
				 paytype,
				 maritalstatus,
				 bloodgroup
			}
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

}
module.exports = new staffDetailsController();