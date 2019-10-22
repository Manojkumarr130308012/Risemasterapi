const fuelEntrySchema = require('./../model/fuel-entry');
const errorHandler = require('./../utils/error.handler');

class fuelEntryController{
	async add(newFuel){
		try{
			let response = await fuelEntrySchema.create(newFuel);
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
			let response = await fuelEntrySchema.find({});
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
			let response = await fuelEntrySchema.find({'_id':id});
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
			let response = await fuelEntrySchema.deleteOne({_id: id});
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
            let response = await fuelEntrySchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await fuelEntrySchema.aggregate([
			{
				$lookup:

					{
						from: "vehicle-masters",
						localField: "fuelVehicleNo",
						foreignField: "_id",
						as: "VehicleDetails"
					}
				},
				{
					$lookup:
	
						{
							from: "filling-stations",
							localField: "stationName",
							foreignField: "_id",
							as: "StationDetails"
						}
					},
					{
						$lookup:
		
							{
								from: "driver-masters",
								localField: "driverName",
								foreignField: "_id",
								as: "DriverDetails"
							}
						}
					
				]);
			

        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
	}

}
module.exports = new fuelEntryController();