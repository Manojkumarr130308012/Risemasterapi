const degreeSchema = require('./../model/degree');
const errorHandler = require('./../utils/error.handler');

class degreeController{
	async add(newAddress){
		try{
			let response = await degreeSchema.create(newAddress);
		
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
			let response = await degreeSchema.find({});
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
			let response = await degreeSchema.find({'_id':id});
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
			let response = await degreeSchema.deleteOne({_id: id});
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
            let response = await degreeSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
	async fetchbyIns(institution){
		try{
			let response = await degreeSchema.find({'institution':institution});
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
    async aggregation() {
        try {
           return  await degreeSchema.aggregate([
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
module.exports = new degreeController();