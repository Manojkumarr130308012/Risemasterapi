const driverSchema = require('./../model/driverMaster');
const errorHandler = require('./../utils/error.handler');
const vehicleSchema = require('./../model/vehicleMaster');

class driverController{
	async add(newDriver){
		try{
			let response = await driverSchema.create(newDriver);
			return { status: "Success", result: response, message: "Added Successfully" };

		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
		try{
			let response = await driverSchema.find({});
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
			let response = await driverSchema.find({'_id':id});
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
			let response = await driverSchema.deleteOne({_id: id});
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
            let response = await driverSchema.updateOne({_id: id}, body);
            return { status: "Success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

	}
	async aggregation() {
        try {
			let result1 =  await vehicleSchema.aggregate([

				{$project: {
						_id:0
	
					   }}
					
				]);

           return  await driverSchema.aggregate([

			{$lookup:

					{
						from: "vehicle-masters",
						localField: "vehicleNo",
						foreignField: "_id",
						as: "VehicleDetails"
					}}
					
				]);
			

        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
	}

}
module.exports = new driverController();