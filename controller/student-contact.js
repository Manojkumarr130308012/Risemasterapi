const studentContactSchema = require('../model/student-contact');
const errorHandler = require('../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentContactController{
	async add(newDetail){
		try {
			let response = await studentContactSchema.create(newDetail);
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
	

	async fetchdata(id){
		try{
			let response = await studentContactSchema.find({'_id':id});
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
			let response = await studentContactSchema.find({});
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
	async fetchcontact(stuId){	
		try{
			return await studentContactSchema.aggregate([

				{
					$match: {
						stuId: ObjectId(stuId)
					}
				},
				{
					$lookup:
					{
					  from: "addresstypes",
					  localField: "addresstype",
					  foreignField: "_id",
					  as: "AddressTypeDetails"
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
			let response = await studentContactSchema.deleteOne({_id: id});
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
            let response = await studentContactSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	async aggregation() {
		try {
		return  await studentContactSchema.aggregate([
				{$lookup:
					  {
						from: "addresstypes",
						localField: "addresstype",
						foreignField: "_id",
						as: "AddressTypeDetails"
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
module.exports = new studentContactController();