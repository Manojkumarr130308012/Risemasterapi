const sectionStaffSchema = require('./../model/section-staff');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class sectionStaffController{
	async add(newdetail){
		try{
			let response = await sectionStaffSchema.create(newdetail);
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
			let response = await sectionStaffSchema.find({});
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
		//	let response = await sectionStaffSchema.find({'_id':id});
           // return response;
            
            return await sectionStaffSchema.aggregate([
                {

                    $match: {
                        _id: ObjectId(id)
                        
                    }
                },	
                
                {
                    $lookup:
                    {
                        from: "staff-profiles",
                        localField: "staff",
                        foreignField: "_id",
                        as: "staffDetails"
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

	async fetchbyIns(institution){
		try{
			let response = await sectionStaffSchema.find({'institution':institution});
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
			let response = await sectionStaffSchema.deleteOne({_id: id});
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
            let response = await sectionStaffSchema.updateOne({_id: id}, body);
            return { 
                status: "success",
                 result: response, 
                 message: "Updated Successfully" 
                };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
        try {
           return  await sectionStaffSchema.aggregate([
            {
                $lookup:
                {
                    from: "semesters",
                    localField: "semester",
                    foreignField: "_id",
                    as: "semesterd"
                }
            },

            {
                $lookup:
                {
                    from: "sections",
                    localField: "section",
                    foreignField: "_id",
                    as: "sectiond"
                }
            },	
               {
                   $lookup:
                   {
                       from: "staff-profiles",
                       localField: "staff",
                       foreignField: "_id",
                       as: "staffd"
                   }
               },
               {
                   $lookup:
                   {
                       from: "subject_details",
                       localField: "subject",
                       foreignField: "_id",
                       as: "subjectd"
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
    async fetchbySection(section){	
		try{
			return await sectionStaffSchema.aggregate([

                {
                    $match: {
                        section: ObjectId(section)
                    }
                },

                {
                    $lookup:
                    {
                        from: "sections",
                        localField: "section",
                        foreignField: "_id",
                        as: "sectiond"
                    }
                },
                {
                    $lookup:
                    {
                        from: "staff-profiles",
                        localField: "staff",
                        foreignField: "_id",
                        as: "staffd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "subject_details",
                        localField: "subject",
                        foreignField: "_id",
                        as: "subjectd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "semesters",
                        localField: "semester",
                        foreignField: "_id",
                        as: "semesterd"
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
    async fetchbySubject(subject){	
		try{
			return await sectionStaffSchema.aggregate([

                {
                    $match: {
                        subject: ObjectId(subject)
                    }
                },

                {
                    $lookup:
                    {
                        from: "sections",
                        localField: "section",
                        foreignField: "_id",
                        as: "sectiond"
                    }
                },
                {
                    $lookup:
                    {
                        from: "staff-profiles",
                        localField: "staff",
                        foreignField: "_id",
                        as: "staffd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "subject_details",
                        localField: "subject",
                        foreignField: "_id",
                        as: "subjectd"
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

}
module.exports = new sectionStaffController();