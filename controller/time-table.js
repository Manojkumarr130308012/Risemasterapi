const timeTableSchema = require('./../model/time-table');
const studentDetailsSchema = require('./../model/student-details');
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
    
   

	async fetchStudentDetails(sectionId){
		try{
			let response = await studentDetailsSchema.find({'section':sectionId});
		//	response= response+{"attendence":"Present"};
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
    

    async filterSubExist(filterSubExist) {

			try {
				let period = filterSubExist.period;
					let day = filterSubExist.day;

					let response = await timeTableSchema.find({'period':period, 'day':day});
			         return response;			
				 
			
	
			} catch (error) {
				return {
					status: "error",
					error: error
				};
			}
		}

		async filterPeriodSubject(filterPeriodExist) {

			try {
				let sectionid = filterPeriodExist.sectionid;
					let day = filterPeriodExist.day;
					let staff = filterPeriodExist.staff;

					//let response = await timeTableSchema.find({'sectionid':sectionid, 'staff':staff});
					//	return response;

					return await timeTableSchema.aggregate([
						{
	
							$match: {
								sectionid: ObjectId(sectionid),							
								staff: ObjectId(staff)								
							
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
							$unwind : "$dayDetails"
						},
						{
	
							$match: {
								"dayDetails.day": day			
							
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

	

	async delete(id){
		try{
			//console.log('id',id);
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

}
module.exports = new timeTableController(); 