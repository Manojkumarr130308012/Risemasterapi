const vehicleSchema = require('./../model/vehicleMaster');
const errorHandler = require('./../utils/error.handler');
const institutionSchema = require('./../model/institution');

class vehicleController{
	async add(newVehicle){
		try{
			let response = await vehicleSchema.create(newVehicle);
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
			let response = await vehicleSchema.find({});
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
			let response = await vehicleSchema.find({'_id':id});
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
			let response = await vehicleSchema.deleteOne({_id: id});
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
            let response = await vehicleSchema.updateOne({_id: id}, body);
           return { status: "success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

	}
	
	async aggregation() {
		try {

            let result =  await institutionSchema.aggregate([
				{$project: {
					_id:0

		 }}
		]);
		return  await vehicleSchema.aggregate([
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
module.exports = new vehicleController();