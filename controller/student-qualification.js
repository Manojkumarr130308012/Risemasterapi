const studentQualifictaionSchema = require('./../model/student-qualification');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentQualificationController{
	async add(newDetail){
		try{
			let response = await studentQualifictaionSchema.create(newDetail);
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
			let response = await studentQualifictaionSchema.find({});
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
			let response = await studentQualifictaionSchema.find({'_id':id});
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
			let response = await studentQualifictaionSchema.deleteOne({_id: id});
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
            let response = await studentQualifictaionSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async aggregation() {
		try {
		return  await studentQualifictaionSchema.aggregate([
			{
				$lookup:
				{
					from: "media",
					localField: "medium",
					foreignField: "_id",
					as: "medium"
				}
			},
			{
				$lookup:
				{
					from: "coursetypes",
					localField: "courseType",
					foreignField: "_id",
					as: "courseType"
				}
			},

			{
				$lookup:
				{
					from: "boards",
					localField: "board",
					foreignField: "_id",
					as: "board"
				}
			},

			{
				$lookup:
				{
					from: "qualificationtypes",
					localField: "qualificationType",
					foreignField: "_id",
					as: "qualificationType"
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
	async fetchbyId(stuId) {
		try {
		return  await studentQualifictaionSchema.aggregate([
			{
				$match: {
					stuId: ObjectId(stuId)
				}
			},
			{
				$lookup:
				{
					from: "media",
					localField: "medium",
					foreignField: "_id",
					as: "medium"
				}
			},
			{
				$lookup:
				{
					from: "coursetypes",
					localField: "courseType",
					foreignField: "_id",
					as: "courseType"
				}
			},

			{
				$lookup:
				{
					from: "boards",
					localField: "board",
					foreignField: "_id",
					as: "board"
				}
			},

			{
				$lookup:
				{
					from: "qualificationtypes",
					localField: "qualificationType",
					foreignField: "_id",
					as: "qualificationType"
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
	async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new Uploadimage({
            fileLoctaion : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'Successfully added', qdFileResult1:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.fileLoctaion}`};
    }
    saveProfilePic(fileMeta){
        return fileMeta.path;
    }
}
module.exports = new studentQualificationController();