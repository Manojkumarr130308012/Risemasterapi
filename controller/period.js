const periodSchema = require('./../model/period');
const errorHandler = require('./../utils/error.handler');

class periodController{
	async add(newdetail){
		try{
			let response = await periodSchema.create(newdetail);
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
			let response = await periodSchema.find({});
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
			let response = await periodSchema.find({'_id':id});
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
			let response = await periodSchema.deleteOne({_id: id});
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
            let response = await periodSchema.updateOne({_id: id}, body);
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
module.exports = new periodController();