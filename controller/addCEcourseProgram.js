const addCECPSchema = require('./../model/addCEcourseProgram');
const errorHandler = require('./../utils/error.handler');
const courseProgramSchema = require('./../model/course-program');

class academicYearController{
	async add(newcourseprogram){
		try{
			let response = await addCECPSchema.create(newcourseprogram);

			return { status: "success", result: response, message: "Added Successfully" };
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetchdata(id){
		try{
			let response = await addCECPSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	async fetch(){
		try{
			let response = await addCECPSchema.find({});
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
			let response = await addCECPSchema.deleteOne({_id: id});
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
            let response = await addCECPSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (err) {
            return { status: "error", err: err };
        }

    }
    async aggregation() {
		try {
         let result =  await courseProgramSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
		return  await addCECPSchema.aggregate([
				{$lookup:
					  {
						from: "course-programs",
						localField: "courseProgram",
						foreignField: "_id",
						as: "courseProgramDetails"
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
module.exports = new academicYearController();