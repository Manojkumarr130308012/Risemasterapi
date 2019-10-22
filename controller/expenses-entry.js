const expensesEntrySchema = require('./../model/expenses-entry');
const errorHandler = require('./../utils/error.handler');

class expensesEntryController{
	async add(newExpenses){
		try{
			let response = await expensesEntrySchema.create(newExpenses);
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
			let response = await expensesEntrySchema.find({});
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
			let response = await expensesEntrySchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyDate(date){
		try{
			console.log('date',date);
			let response = await expensesEntrySchema.find({'date':date});
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
			let response = await expensesEntrySchema.deleteOne({_id: id});
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
            let response = await expensesEntrySchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await expensesEntrySchema.aggregate([
			{
                $lookup:

					{
						from: "vehicle-masters",
						localField: "vehicleNo",
						foreignField: "_id",
						as: "VehicleDetails"
                    }
                },
                {
                    $lookup:
    
                        {
                            from: "vehicle-expenses",
                            localField: "expense",
                            foreignField: "_id",
                            as: "ExpenseDetails"
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
module.exports = new expensesEntryController();