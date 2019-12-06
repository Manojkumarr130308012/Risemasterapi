const weekDaySchema = require('./../model/weekDay');
const errorHandler = require('./../utils/error.handler');

class weekDayController{
	async add(newdetail){
		try{
			let response = await weekDaySchema.create(newdetail);
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
			let response = await weekDaySchema.find({});
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
			let response = await weekDaySchema.find({'_id':id});
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
			let response = await weekDaySchema.deleteOne({_id: id});
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
            let response = await weekDaySchema.updateOne({_id: id}, body);
            return { 
                status: "success",
                 result: response, 
                 message: "Updated Successfully" 
                };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	

}
module.exports = new weekDayController();