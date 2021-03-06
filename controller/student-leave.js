const studentLeaveSchema = require('../model/student-leave');
const errorHandler = require('../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentLeaveController{
	async add(newDetail){
		try {
			//console.log('newDetail',newDetail);
			let response = await studentLeaveSchema.create(newDetail);
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	

	async fetchdata(id){
		try{
			let response = await studentLeaveSchema.find({'studentId':id});
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
			let response = await studentLeaveSchema.find({});
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
	async fetchAttendenceEntryExist(fetchAttendenceEntryExist) {

		//console.log('fetchAttendenceEntryExist',fetchAttendenceEntryExist);

		try {
			let semester = fetchAttendenceEntryExist.semester;
				let section = fetchAttendenceEntryExist.section;
				let attendenceDate = fetchAttendenceEntryExist[0].attendenceDate;
				let period = fetchAttendenceEntryExist[0].period;
				let subjectId = fetchAttendenceEntryExist[0].subjectId;
				//'semester':semester, 'section':section,
				let response = await studentLeaveSchema.find({
				'attendenceDate':attendenceDate,'period':period,'subjectId':subjectId,});
				 return response;		 
		

		} catch (error) {
			return {
				status: "error",
				error: error
			};
		}
	}

	

	async delete(id){
		try{
			let response = await studentLeaveSchema.deleteOne({_id: id});
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
            let response = await studentLeaveSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	


	async fetchStudentAttendenceDetails(attendenceDetails){
		try{

			let section = attendenceDetails.section;
				let attendenceDate = attendenceDetails.attendenceDate;
				let period = attendenceDetails.period;

			return await studentLeaveSchema.aggregate([

				{
					$match: {
						section: ObjectId(section),
						period: ObjectId(period),
						attendenceDate: attendenceDate

					}
                },
				{
					$lookup:
					  {
						from: "student_details",
						localField: "studentId",
						foreignField: "_id",
						as: "studentDetails"
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

	async fetchStudentAttendence(filterStudentAttendence) {
		//console.log('Filter Subject', filterStudentAttendence);
			try {
				let sectionid = filterStudentAttendence.section;	
				let attendenceDate=filterStudentAttendence.attendenceDate;
				
				 
				return await studentLeaveSchema.aggregate([
					{

						$match: {
							section: ObjectId(sectionid),
							attendenceDate: attendenceDate						
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

		


		async fetchAttendence(filterAttendence) {
			//console.log('Filter Attend', filterAttendence);
				try {
					let semester = filterAttendence.semester;	
					let section=filterAttendence.section;
					let attendenceDay=filterAttendence.attendenceDay;					
					let attendenceDate = filterAttendence.attendenceDate;

					return await studentLeaveSchema.aggregate([
						{
	
							$match: {
								semester: ObjectId(semester),
								section: ObjectId(section),
								attendenceDay: attendenceDay,
								attendenceDate: attendenceDate					
							}
						},				
						{
							$lookup:
							{
								from: "sections",
								localField: "section",
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
								localField: "attendenceDay",
								foreignField: "_id",
								as: "dayDetails"
							}
						},
						{
							$lookup:
							{
								from: "subject_details",
								localField: "subjectId",
								foreignField: "_id",
								as: "subjectDetails"
							}
						},
						{
							$lookup:
							{
								from: "staff-profiles",
								localField: "staffId",
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

		

	
}
module.exports = new studentLeaveController();