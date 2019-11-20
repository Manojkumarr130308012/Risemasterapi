const staffProfileSchema = require('./../model/staff-profile');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class staffProfileController {
	async add(newStaffProfile) {
		try {
			let response = await staffProfileSchema.create(newStaffProfile);
			let password = this.generateToken(response.staffCode);
			this.saveToken(response._id, password);
            response.password = password;
			return { status: "success", result: response, message: "Added Successfully" };

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
 //////Password Encryption
 async saveToken(staffID, password){
	try{
		await staffProfileSchema.update({_id: staffID}, {password: password})
	} catch(err){
		console.log(err);
	}
}
 generateToken(staffCode) {
	let password = staffCode;
	return require('crypto').createHash('md5').update(password).digest('hex')
}
//////////////
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

			return await staffProfileSchema.aggregate([

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
						as: "InstitutionDetails"
					}
				},
				{
				$lookup:
				{
					from: "staff-types",
					localField: "stafftype",
					foreignField: "_id",
					as: "StaffTypeDetails"
				}
			},
				{
				$lookup:
				{
					from: "staff-roles",
					localField: "staffrole",
					foreignField: "_id",
					as: "StaffRoleDetails"
				}
			},
				{
				$lookup:
				{
					from: "salutations",
					localField: "salutation",
					foreignField: "_id",
					as: "salutationDetails"
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
					from: "pay-types",
					localField: "paytype",
					foreignField: "_id",
					as: "PayTypeDetails"
				}
			},
				{
				$lookup:
				{
					from: "marital-statuses",
					localField: "maritalstatus",
					foreignField: "_id",
					as: "MaritalStatusDetails"
				}
			},
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
			
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyDepartment(department){
		try{
			return await staffProfileSchema.aggregate([

				{
					$match: {
						department: ObjectId(department)
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "DepartmentDetails"
					}
				},
				{
				$lookup:
				{
					from: "staff-types",
					localField: "stafftype",
					foreignField: "_id",
					as: "StaffTypeDetails"
				}
			},
				{
				$lookup:
				{
					from: "staff-roles",
					localField: "staffrole",
					foreignField: "_id",
					as: "StaffRoleDetails"
				}
			},
				{
				$lookup:
				{
					from: "salutations",
					localField: "salutation",
					foreignField: "_id",
					as: "salutationDetails"
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
					from: "pay-types",
					localField: "paytype",
					foreignField: "_id",
					as: "PayTypeDetails"
				}
			},
				{
				$lookup:
				{
					from: "marital-statuses",
					localField: "maritalstatus",
					foreignField: "_id",
					as: "MaritalStatusDetails"
				}
			},
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
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyInstitution(institution){
		try{
			return await staffProfileSchema.aggregate([

				{
					$match: {
						institution: ObjectId(institution)
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "DepartmentDetails"
					}
				},
				{
				$lookup:
				{
					from: "staff-types",
					localField: "stafftype",
					foreignField: "_id",
					as: "StaffTypeDetails"
				}
			},
				{
				$lookup:
				{
					from: "staff-roles",
					localField: "staffrole",
					foreignField: "_id",
					as: "StaffRoleDetails"
				}
			},
				{
				$lookup:
				{
					from: "salutations",
					localField: "salutation",
					foreignField: "_id",
					as: "salutationDetails"
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
					from: "pay-types",
					localField: "paytype",
					foreignField: "_id",
					as: "PayTypeDetails"
				}
			},
				{
				$lookup:
				{
					from: "marital-statuses",
					localField: "maritalstatus",
					foreignField: "_id",
					as: "MaritalStatusDetails"
				}
			},
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

			return await staffProfileSchema.aggregate([
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
							from: "departments",
							localField: "department",
							foreignField: "_id",
							as: "DepartmentDetails"
						}
					},
					{
					$lookup:
					{
						from: "staff-types",
						localField: "stafftype",
						foreignField: "_id",
						as: "StaffTypeDetails"
					}
				},
					{
					$lookup:
					{
						from: "staff-roles",
						localField: "staffrole",
						foreignField: "_id",
						as: "StaffRoleDetails"
					}
				},
					{
					$lookup:
					{
						from: "salutations",
						localField: "salutation",
						foreignField: "_id",
						as: "salutationDetails"
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
						from: "pay-types",
						localField: "paytype",
						foreignField: "_id",
						as: "PayTypeDetails"
					}
				},
					{
					$lookup:
					{
						from: "marital-statuses",
						localField: "maritalstatus",
						foreignField: "_id",
						as: "MaritalStatusDetails"
					}
				},
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
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

}
module.exports = new staffProfileController();