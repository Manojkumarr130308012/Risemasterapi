const timeTableSchema = require('./../model/time-table');
const errorHandler = require('./../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class timeTableController{
	async add(newdetail){
		try{
			let response = await timeTableSchema.create(newdetail);
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
			let response = await timeTableSchema.find({});
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
			let response = await timeTableSchema.find({'_id':id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
    
   

    async fetchSubjectStaff(filterSubject) {
		//console.log('Filter Subject', filterSubject);
			try {
				let sectionid = filterSubject.sectionid;
				
				
				 
				return await timeTableSchema.aggregate([
					{

						$match: {
							sectionid: ObjectId(sectionid)							
						
						}
					},				
					{
						$lookup:
						{
							from: "sections",
							localField: "sectionid",
							foreignField: "_id",
							as: "sectionDetails"
						}
					},
					{
						$lookup:
						{
							from: "periods",
							localField: "period",
							foreignField: "_id",
							as: "periodDetails"
						}
					},
					{
						$lookup:
						{
							from: "week_days",
							localField: "day",
							foreignField: "_id",
							as: "dayDetails"
						}
					},
					{
						$lookup:
						{
							from: "subject_details",
							localField: "subject",
							foreignField: "_id",
							as: "subjectDetails"
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
	
	
			} catch (error) {
				return {
					status: "error",
					error: error
				};
			}
		}

	// async fetchbyIns(institution){
	// 	try{
	// 		let response = await timeTableSchema.find({'institution':institution});
	// 		return {
	// 			response: response
	// 		};
			
	// 	} catch(error){
	// 		return {
	// 			status: "error",
	// 			error: errorHandler.parseMongoError(error)
	// 		};
	// 	}
	// }

	async delete(id){
		try{
			let response = await timeTableSchema.deleteOne({_id: id});
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
            let response = await timeTableSchema.updateOne({_id: id}, body);
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
           return  await timeTableSchema.aggregate([
           

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
    // async fetchbySection(section){	
	// 	try{
	// 		return await timeTableSchema.aggregate([

    //             {
    //                 $match: {
    //                     section: ObjectId(section)
    //                 }
    //             },

    //             {
    //                 $lookup:
    //                 {
    //                     from: "sections",
    //                     localField: "section",
    //                     foreignField: "_id",
    //                     as: "sectiond"
    //                 }
    //             },
    //             {
    //                 $lookup:
    //                 {
    //                     from: "staff-profiles",
    //                     localField: "staff",
    //                     foreignField: "_id",
    //                     as: "staffd"
    //                 }
    //             },
    //             {
    //                 $lookup:
    //                 {
    //                     from: "subject_details",
    //                     localField: "subject",
    //                     foreignField: "_id",
    //                     as: "subjectd"
    //                 }
    //             },
    //             {
    //                 $lookup:
    //                 {
    //                     from: "semesters",
    //                     localField: "semester",
    //                     foreignField: "_id",
    //                     as: "semesterd"
    //                 }
    //             },	
	// 		]);
			
	// 	} catch(error){
	// 		return {
	// 			status: "error",
	// 			error: error
	// 		};
	// 	}
    // }
    // async fetchbySubject(subject){	
	// 	try{
	// 		return await timeTableSchema.aggregate([

    //             {
    //                 $match: {
    //                     subject: ObjectId(subject)
    //                 }
    //             },

    //             {
    //                 $lookup:
    //                 {
    //                     from: "sections",
    //                     localField: "section",
    //                     foreignField: "_id",
    //                     as: "sectiond"
    //                 }
    //             },
    //             {
    //                 $lookup:
    //                 {
    //                     from: "staff-profiles",
    //                     localField: "staff",
    //                     foreignField: "_id",
    //                     as: "staffd"
    //                 }
    //             },
    //             {
    //                 $lookup:
    //                 {
    //                     from: "subject_details",
    //                     localField: "subject",
    //                     foreignField: "_id",
    //                     as: "subjectd"
    //                 }
    //             }		
	// 		]);
			
	// 	} catch(error){
	// 		return {
	// 			status: "error",
	// 			error: error
	// 		};
	// 	}
	// }

}
module.exports = new timeTableController();