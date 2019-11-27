const stageDetailsSchema = require('./../model/stage-details');
const errorHandler = require('./../utils/error.handler');

class stageDetailsController{
	async add(newStageDetails){
		try{
			let response = await stageDetailsSchema.create(newStageDetails);
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
			let response = await stageDetailsSchema.find({});
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
			let response = await stageDetailsSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
    
    async fetchbyVehicleId(IdValue){
		try{
			let response = await stageDetailsSchema.find({'IdValue':IdValue});
			
			return  response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await stageDetailsSchema.deleteOne({_id: id});
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
		//console.log("stageID",id);
        try {
			let response = await stageDetailsSchema.updateOne({_id: id}, body);
			//console.log("res1",response);
            return { status: "success", response: body, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

}
module.exports = new stageDetailsController();