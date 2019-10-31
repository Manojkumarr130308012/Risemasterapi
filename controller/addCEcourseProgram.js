const addCECPSchema = require('./../model/addCEcourseProgram');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class academicYearController{
	async add(newcourseprogram){
		try{
			let response = await addCECPSchema.create(newcourseprogram);

			return { status: "success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetchdata(id){
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
					  from: "course-programs",
					  localField: "courseprogram",
					  foreignField: "_id",
					  as: "courseprogram"
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
						from: "course-programs",
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
module.exports = new academicYearController();