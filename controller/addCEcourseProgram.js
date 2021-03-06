const addCECPSchema = require('./../model/addCEcourseProgram');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class addCECPController{
	async add(newcourseprogram){
		try{
			let response = await addCECPSchema.create(newcourseprogram);

			return { 
				status: "success", 
				res: response
			};
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetchdata1(id){
		try{
			let response = await addCECPSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchdata(canId){	
		try{
			return await addCECPSchema.aggregate([

				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{$lookup:
					{
					  from: "course-categories",
					  localField: "coursecategory",
					  foreignField: "_id",
					  as: "coursecategory"
					}
			   },	
				{$lookup:
					{
					  from: "course_programs",
					  localField: "courseprogram",
					  foreignField: "_id",
					  as: "courseprogram"
					}
			   },
			   {$lookup:
				{
				  from: "institutions",
				  localField: "institution",
				  foreignField: "_id",
				  as: "institution"
				}
		   },	
			]);
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	async fetch(){
		try{
			let response = await addCECPSchema.find({});
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
	async fetchCECouPro(canId){	
		try{
			return await addCECPSchema.aggregate([

				{
					$match: {
						canId: ObjectId(canId)
					}
				},
				{$lookup:
					{
					  from: "course-categories",
					  localField: "coursecategory",
					  foreignField: "_id",
					  as: "coursecategory"
					}
			   },	
				{$lookup:
					{
					  from: "course_programs",
					  localField: "courseprogram",
					  foreignField: "_id",
					  as: "courseprogram"
					}
			   },
			   {$lookup:
				{
				  from: "institutions",
				  localField: "institution",
				  foreignField: "_id",
				  as: "institution"
				}
		   },	
			]);
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	async delete(id){
		try{
			let response = await addCECPSchema.deleteOne({_id: id});
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
            let response = await addCECPSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

    }
    async aggregation() {
		try {
		return  await addCECPSchema.aggregate([
			{$lookup:
				{
				  from: "course-categories",
				  localField: "coursecategory",
				  foreignField: "_id",
				  as: "coursecategory"
				}
		   },	
				{$lookup:
					  {
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogram"
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
module.exports = new addCECPController();