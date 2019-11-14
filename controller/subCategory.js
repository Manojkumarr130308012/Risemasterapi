const subCategorySchema = require('./../model/subCategory');
const errorHandler = require('./../utils/error.handler');

class subCategoryController{
	async add(newactivity){
		try{
			let response = await subCategorySchema.create(newactivity);
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
			let response = await subCategorySchema.find({});
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
			let response = await subCategorySchema.find({'_id':id});
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
			let response = await subCategorySchema.deleteOne({_id: id});
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
            let response = await subCategorySchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

    }
    async aggregation() {
		try {
		return  await subCategorySchema.aggregate([
				{
					$lookup:
					  {
						from: "activitycategories",
						localField: "activityCategory",
						foreignField: "_id",
						as: "activityCategory"
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
	async fetchSubCat(activityCate){
		try{
			let response = await subCategorySchema.find({'activityCategory':activityCate});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
}
module.exports = new subCategoryController();