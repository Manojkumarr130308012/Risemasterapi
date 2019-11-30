const subjectClassificationSchema = require('./../model/subject-classification');
const errorHandler = require('./../utils/error.handler');

class subjectClassificationController{
	async add(newdetail){
		try{
			let response = await subjectClassificationSchema.create(newdetail);
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
			let response = await subjectClassificationSchema.find({});
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
			let response = await subjectClassificationSchema.find({'_id':id});
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
			let response = await subjectClassificationSchema.find({'institution':institution});
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
			let response = await subjectClassificationSchema.deleteOne({_id: id});
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
            let response = await subjectClassificationSchema.updateOne({_id: id}, body);
            return { 
                status: "success", 
                result: response, 
                message: "Updated Successfully" 
            };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await subjectClassificationSchema.aggregate([
			{$lookup:
				{
				  from: "institutions",
				  localField: "institution",
				  foreignField: "_id",
				  as: "InstitutionDetails"
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
module.exports = new subjectClassificationController();