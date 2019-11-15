const studentCertificateSchema = require('../model/student-certificate');
const errorHandler = require('../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentCertificateController{
	async add(newDetail){
		try {
			let response = await studentCertificateSchema.create(newDetail);
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
			let response = await studentCertificateSchema.find({'_id':id});
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
			let response = await studentCertificateSchema.find({});
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
			return await studentCertificateSchema.aggregate([

				{
					$match: {
						stuId: ObjectId(stuId)
					}
				},
				{
					$lookup:
					{
					  from: "certificatetypes",
					  localField: "certificateType",
					  foreignField: "_id",
					  as: "certificateType"
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
			let response = await studentCertificateSchema.deleteOne({_id: id});
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
            let response = await studentCertificateSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	async aggregation() {
		try {
		return  await studentCertificateSchema.aggregate([
            {
                $lookup:
                {
                  from: "certificatetypes",
                  localField: "certificateType",
                  foreignField: "_id",
                  as: "certificateType"
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
	async fetchbyId(stuId){
		try{

			return await studentCertificateSchema.aggregate([

				{
					$match: {
						stuId: ObjectId(stuId)
					}
                },
				{
					$lookup:
					{
					  from: "certificatetypes",
					  localField: "certificateType",
					  foreignField: "_id",
					  as: "certificateType"
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
module.exports = new studentCertificateController();