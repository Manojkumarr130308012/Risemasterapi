const batchSchema = require('./../model/batch');
const errorHandler = require('./../utils/error.handler');

class batchController{
	async add(newbatch){
        try {
            let response = await batchSchema.create(newbatch);
            return {
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
			let response = await batchSchema.find({});
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
			let response = await batchSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetchByCour(courseprogram){
		try{
			let response = await batchSchema.find({'courseprogram':courseprogram});
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
			let response = await batchSchema.deleteOne({_id: id});
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
            let response = await batchSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await batchSchema.aggregate([
			{$lookup:
				{
				  from: "course_programs",
				  localField: "courseprogram",
				  foreignField: "_id",
				  as: "courseprogram"
				}
		   },
			{$lookup:
				{
				  from: "institutions",
				  localField: "institution",
				  foreignField: "_id",
				  as: "institution"
				}
		   },	
		   {
			$lookup:
			{
				from: "academicyears",
				localField: "academicYear",
				foreignField: "_id",
				as: "academicYeard"
			}
		},
		{
			$lookup:
			{
				from: "batches",
				localField: "batch",
				foreignField: "_id",
				as: "batchd"
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
module.exports = new batchController();