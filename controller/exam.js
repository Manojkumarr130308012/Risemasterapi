const examSchema = require('./../model/exam');
const errorHandler = require('./../utils/error.handler');

class examController{

	async add(newAdmissionCategory){
		try{
			let response = await examSchema.create(newAdmissionCategory);
			
			return { status: "success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	
	async fetch(){
		try{
			let response = await examSchema.find({});
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
			let response = await examSchema.find({'_id':id});
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
			let response = await examSchema.deleteOne({_id: id});
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
            let response = await examSchema.updateOne({_id: id}, body);
			return { status: "success", result: response, message: "Updated Successfully" };
        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async fetchdataactive(status){
		try{
			let response = await examSchema.find({'status':status});
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
	async fetchbyIns(examtype){
		try{
			let response = await examSchema.find({'examtype':examtype});
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
		return  await examSchema.aggregate([
				{$lookup:
					  {
						from: "examtypes",
						localField: "examtype",
						foreignField: "_id",
						as: "examtypeDetails"
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
module.exports = new examController();