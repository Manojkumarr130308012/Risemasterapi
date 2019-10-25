const fuelEntrySchema = require('./../model/fuel-entry');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

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

	async fetchKMSbyVehicle(vehicleno){
		try{
			let response = await fuelEntrySchema.find({'fuelVehicleNo':vehicleno}).sort({"fuelDate":-1}).limit(1);						
			return response;			
			console.log(response);
			
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
	

	async fetchFuelReportbyDate(filterFuelbyDate){
		try{		

			//console.log(filterFuelbyDate);		

			let	fuelVehicleNo   = filterFuelbyDate.fuelVehicleNo;
			let	fuelDate     = filterFuelbyDate.fuelDate;
			let	fuelDate2     = filterFuelbyDate.fuelDate2;

			
			//console.log(filterFuelbyDate);
			//console.log(fuelVehicleNo);


			return  await fuelEntrySchema.aggregate([		

					{
						$match: {
							fuelVehicleNo: ObjectId(fuelVehicleNo),
							fuelDate: { "$gte": fuelDate, "$lt": fuelDate2 }
							
						}
					},
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
				
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}

	async fetchFuelReportbyVehicle(fuelVehicleNo){
		try{		
			return  await fuelEntrySchema.aggregate([		

					{
						$match: {
							fuelVehicleNo: ObjectId(fuelVehicleNo)
							//fuelDate: { "$gte": "2019-10-1", "$lt": "2019-10-26" }
							
						}
					},
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
				
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
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