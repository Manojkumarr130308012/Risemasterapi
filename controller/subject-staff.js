const subjectStaffSchema = require('./../model/subject-staff');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class subjectStaffController{
	async add(newdetail){
		try{
			let response = await subjectStaffSchema.create(newdetail);
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
			let response = await subjectStaffSchema.find({});
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
			let response = await subjectStaffSchema.find({'_id':id});
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
			let response = await subjectStaffSchema.find({'institution':institution});
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
			let response = await subjectStaffSchema.deleteOne({_id: id});
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
            let response = await subjectStaffSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await subjectStaffSchema.aggregate([
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
                       from: "staff-profiles",
                       localField: "staffName",
                       foreignField: "_id",
                       as: "staffdetails"
                   }
			   },
			   {
				$lookup:
				{
					from: "subject_details",
					localField: "subject",
					foreignField: "_id",
					as: "subjectdetails"
				}
			}	 
		  ]);
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
	}
	async fetchBySubject(subject){	
		try{
			return await subjectStaffSchema.aggregate([

				{
					$match: {
						subject: ObjectId(subject)
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
						from: "staff-profiles",
						localField: "staffName",
						foreignField: "_id",
						as: "staffdetails"
					}
				},
				{
				 $lookup:
				 {
					 from: "subject_details",
					 localField: "subject",
					 foreignField: "_id",
					 as: "subjectdetails"
				 }
			 }	 
			]);
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
}
module.exports = new subjectStaffController();