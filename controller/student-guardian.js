const studentGardianSchema = require('../model/student-guardian');
const errorHandler = require('../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentGuardianController{
	async add(newdetail){
		try{
			let response = await studentGardianSchema.create(newdetail);
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
			let response = await studentGardianSchema.find({});
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
			let response = await studentGardianSchema.find({'_id':id});
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
			let response = await studentGardianSchema.deleteOne({_id: id});
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
            let response = await studentGardianSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async fetchbyId(stuId){
		try{

			return await studentGardianSchema.aggregate([

				{
					$match: {
						stuId: ObjectId(stuId)
					}
                },
				{
					$lookup:
					  {
						from: "addresstypes",
						localField: "addressType",
						foreignField: "_id",
						as: "addressType"
					  }
				 },
				 {
					$lookup:
					  {
						from: "relationships",
						localField: "relationship",
						foreignField: "_id",
						as: "relationship"
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


}
module.exports = new studentGuardianController();