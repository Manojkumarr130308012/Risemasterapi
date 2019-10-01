const staffProfileSchema = require('./../model/staff-profile');
const errorHandler = require('./../utils/error.handler');
const staffTypeSchema = require('./../model/staff-type');
const genderSchema = require('./../model/gender');
const staffRoleSchema = require('./../model/staff-role');
const salutationSchema = require('./../model/salutation');
const payTypeSchema = require('./../model/pay-type');
const maritalStatusSchema = require('./../model/marital-status');
const bloodgroupSchema = require('./../model/bloodgroup');

class staffProfileController {
	async add(newStaffProfile) {
		try {
			let response = await staffProfileSchema.create(newStaffProfile);
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
			let response = await staffProfileSchema.find({});
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
			let response = await staffProfileSchema.find({ '_id': id });
			return response;

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyStaffProfileId(id){
		try{
			let response = await staffProfileSchema.find({'_id':id});
			return response;
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id) {
		try {
			let response = await staffProfileSchema.deleteOne({ _id: id });
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
			let response = await staffProfileSchema.updateOne({ _id: id }, body);
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
			let stafftype = await staffProfileSchema.aggregate([
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
			let staffrole = await staffProfileSchema.aggregate([
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
			let salutation = await staffProfileSchema.aggregate([
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
			let gender = await staffProfileSchema.aggregate([
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
			let paytype = await staffProfileSchema.aggregate([
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
			let maritalstatus = await staffProfileSchema.aggregate([
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
			let bloodgroup = await staffProfileSchema.aggregate([
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
module.exports = new staffProfileController();