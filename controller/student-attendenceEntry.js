const studentAttendenceSchema = require('../model/student-attendenceEntry');
const errorHandler = require('../utils/error.handler');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class studentAttendenceController{
	async add(newDetail){
		try {
			//console.log('newDetail',newDetail);
			let response = await studentAttendenceSchema.create(newDetail);
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
			let response = await studentAttendenceSchema.find({'_id':id});
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
			let response = await studentAttendenceSchema.find({});
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
				let response = await studentAttendenceSchema.find({
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
			let response = await studentAttendenceSchema.deleteOne({_id: id});
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
            let response = await studentAttendenceSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

    }

	
	/*async fetchStudentAttendenceDetails(attendenceDetails) {

		try {
			
				let section = attendenceDetails.section;
				let attendenceDate = attendenceDetails.attendenceDate;
				let period = attendenceDetails.period;			

				let response = await studentAttendenceSchema.find({'section':section,
				'attendenceDate':attendenceDate,'period':period,});
				 return response;		 
		

		} catch (error) {
			return {
				status: "error",
				error: error
			};
		}
	}*/

	async fetchStudentAttendenceDetails(attendenceDetails){
		try{

			let section = attendenceDetails.section;
				let attendenceDate = attendenceDetails.attendenceDate;
				let period = attendenceDetails.period;

			return await studentAttendenceSchema.aggregate([

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

}
module.exports = new studentAttendenceController();