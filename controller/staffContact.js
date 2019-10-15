const staffContactSchema = require('./../model/staffContact');
const errorHandler = require('./../utils/error.handler');
const addressTypeSchema = require('./../model/addressType');

class staffContactController{
	async add(newstaffContact){
		try{
			let response = await staffContactSchema.create(newstaffContact);
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
			let response = await staffContactSchema.find({});
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

	async fetchcontact(id){
		try{
			return await staffContactSchema.aggregate([

				{
					$match: {
						id: id
					}
				},
				{
					$lookup:
					{
					  from: "addresstypes",
					  localField: "addressType",
					  foreignField: "_id",
					  as: "AddressTypeDetails"
					}
			   },		
			]);
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id){
		try{
			let response = await staffContactSchema.find({'_id':id});
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
			let response = await staffContactSchema.deleteOne({_id: id});
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
            let response = await staffContactSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

    async aggregation() {
        try {
           return  await staffContactSchema.aggregate([
			{
                $lookup:
				{
				  from: "addresstypes",
				  localField: "addressType",
				  foreignField: "_id",
				  as: "AddressTypeDetails"
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
module.exports = new staffContactController();