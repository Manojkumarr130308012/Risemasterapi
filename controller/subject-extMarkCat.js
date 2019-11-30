const subjectExtMarkCatSchema = require('./../model/subject-extMarkCat');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class subjectMarkDefinitionController{
	async add(newdetail){
		try{
			let response = await subjectExtMarkCatSchema.create(newdetail);
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
			let response = await subjectExtMarkCatSchema.find({});
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
			let response = await subjectExtMarkCatSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyIns(institution){
		try{
			let response = await subjectExtMarkCatSchema.find({'institution':institution});
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
			let response = await subjectExtMarkCatSchema.deleteOne({_id: id});
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
            let response = await subjectExtMarkCatSchema.updateOne({_id: id}, body);
            return { status: "success", result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await subjectExtMarkCatSchema.aggregate([
			{$lookup:
				{
				  from: "institutions",
				  localField: "institution",
				  foreignField: "_id",
				  as: "InstitutionDetails"
				}
           },
               {
                   $lookup:
                   {
                       from: "subject_markdefinitions",
                       localField: "markDefinition",
                       foreignField: "_id",
                       as: "MarkDefinitionDetails"
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
	
	async fetchByMarkDef(markDefinition){	
		try{
			return await subjectExtMarkCatSchema.aggregate([

				{
					$match: {
						markDefinition: ObjectId(markDefinition)
					}
				},
				{$lookup:
					{
					  from: "institutions",
					  localField: "institution",
					  foreignField: "_id",
					  as: "InstitutionDetails"
					}
			   },
				   {
					   $lookup:
					   {
						   from: "subject_markdefinitions",
						   localField: "markDefinition",
						   foreignField: "_id",
						   as: "MarkDefinitionDetails"
					   }
				   },
			]);
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}


}
module.exports = new subjectMarkDefinitionController();