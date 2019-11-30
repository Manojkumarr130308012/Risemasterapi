const subjectSyllabusSchema = require('./../model/subject-syllabus');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class subjectSyllabusController{
	async add(newdetail){
		try{
			let response = await subjectSyllabusSchema.create(newdetail);
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
			let response = await subjectSyllabusSchema.find({});
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
			let response = await subjectSyllabusSchema.find({'_id':id});
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
			let response = await subjectSyllabusSchema.find({'institution':institution});
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
			let response = await subjectSyllabusSchema.deleteOne({_id: id});
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
            let response = await subjectSyllabusSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await subjectSyllabusSchema.aggregate([
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
			return await subjectSyllabusSchema.aggregate([

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
module.exports = new subjectSyllabusController();