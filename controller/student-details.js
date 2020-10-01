const studentDetailsSchema = require('./../model/student-details');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const crypto = require('crypto');

class studentDetailsController {
	async add(newstudentdetails) {
		try {
            let response = await studentDetailsSchema.create(newstudentdetails);
            let password = this.generateToken(response.rollNo);
            console.log('password',password);
            this.saveToken(response._id, password);
            response.password = password;
			return { 
                status: "success", 
                result: response, 
                message: "Added Successfully" 
            };

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
//Password Encryption
    async saveToken(studID, password){
        try{
            await studentDetailsSchema.update({_id: studID}, {password: password})
        } catch(err){
            console.log(err);
        }
    }
     generateToken(rollNO) {
        let password = rollNO;
        var mykey = crypto.createCipher('aes-128-cbc', 'password');
		var mystr = mykey.update(password, 'utf8', 'hex')
		mystr += mykey.final('hex');

		return mystr;
    }
//Convert To Student
async convert(newstudentdetails) {
    try {
        let response = await studentDetailsSchema.create(newstudentdetails);
        return { 
            status: "success", 
            result: response 
        };

    } catch (error) {
        return {
            status: "error",
            error: errorHandler.parseMongoError(error)
        };
    }
}
//
	async fetch() {
		try {
			let response = await studentDetailsSchema.find({});
			return {
				response: response
			};
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchdata(id) {
		try {
			let response = await studentDetailsSchema.find({ '_id': id });
			return response;

		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }
    




	async fetchbyId(id){
		try{

			return await studentDetailsSchema.aggregate([

				{
					$match: {
						_id: ObjectId(id)
					}
                },
                {
                    $lookup:
                    {
                        from: "institutions",
                        localField: "institution",
                        foreignField: "_id",
                        as: "institutiond"
                    }
                },
                {
                    $lookup:
                    {
                        from: "nationalities",
                        localField: "nationality",
                        foreignField: "_id",
                        as: "nationalityd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "religions",
                        localField: "religion",
                        foreignField: "_id",
                        as: "religiond"
                    }
                },
                {
                    $lookup:
                    {
                        from: "communities",
                        localField: "community",
                        foreignField: "_id",
                        as: "communityd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "castes",
                        localField: "caste",
                        foreignField: "_id",
                        as: "casted"
                    }
                },
                {
                    $lookup:
                    {
                        from: "admissioncategories",
                        localField: "admissionCategory",
                        foreignField: "_id",
                        as: "admissionCategoryd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mothertongues",
                        localField: "motherTongue",
                        foreignField: "_id",
                        as: "motherTongued"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mothertongues",
                        localField: "secondLanguage",
                        foreignField: "_id",
                        as: "secondLanguaged"
                    }
                },
                {
                    $lookup:
                    {
                        from: "genders",
                        localField: "gender",
                        foreignField: "_id",
                        as: "genderd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "marital-statuses",
                        localField: "maritalStatus",
                        foreignField: "_id",
                        as: "maritalStatusd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "bloodgroups",
                        localField: "bloodGroup",
                        foreignField: "_id",
                        as: "bloodGroupd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "referraltypes",
                        localField: "referalType",
                        foreignField: "_id",
                        as: "referalTyped"
                    }
                },
                {
                    $lookup:
                    {
                        from: "admission-types",
                        localField: "admissionType",
                        foreignField: "_id",
                        as: "admissionTyped"
                    }
                },
                {
                    $lookup:
                    {
                        from: "course_programs",
                        localField: "courseprogram",
                        foreignField: "_id",
                        as: "courseprogramd"
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
                {
                    $lookup:
                    {
                        from: "hostels",
                        localField: "hostel",
                        foreignField: "_id",
                        as: "hosteld"
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

	

	async delete(id) {
		try {
			let response = await studentDetailsSchema.deleteOne({ _id: id });
			return {
				status: "success",
				response: response
			};
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

		try {
            let response = await studentDetailsSchema.updateOne({ _id: id }, body);
            //password generation - rollNo
            let password = this.generateToken(body.rollNo);
            console.log('password2',password);
            this.saveToken(id, password);
            body.password = password;
            return { 
                status: "success", 
                result: response
        };

		} catch (err) {
			return { status: "error", err: err };
		}

	}

	async aggregation() {
		try {

			return await studentDetailsSchema.aggregate([
                {

           	$lookup:
					{
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "institutiond"
					}
				},
                {
                    $lookup:
                    {
                        from: "nationalities",
                        localField: "nationality",
                        foreignField: "_id",
                        as: "nationality"
                    }
                },
                {
                    $lookup:
                    {
                        from: "religions",
                        localField: "religion",
                        foreignField: "_id",
                        as: "religion"
                    }
                },
                {
                    $lookup:
                    {
                        from: "communities",
                        localField: "community",
                        foreignField: "_id",
                        as: "community"
                    }
                },
                {
                    $lookup:
                    {
                        from: "castes",
                        localField: "caste",
                        foreignField: "_id",
                        as: "caste"
                    }
                },
                {
                    $lookup:
                    {
                        from: "admissioncategories",
                        localField: "admissionCategory",
                        foreignField: "_id",
                        as: "admissionCategory"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mothertongues",
                        localField: "motherTongue",
                        foreignField: "_id",
                        as: "motherTongue"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mothertongues",
                        localField: "secondLanguage",
                        foreignField: "_id",
                        as: "secondLanguage"
                    }
                },
                {
                    $lookup:
                    {
                        from: "genders",
                        localField: "gender",
                        foreignField: "_id",
                        as: "gender"
                    }
                },
                {
                    $lookup:
                    {
                        from: "marital-statuses",
                        localField: "maritalStatus",
                        foreignField: "_id",
                        as: "maritalStatus"
                    }
                },
                {
                    $lookup:
                    {
                        from: "bloodgroups",
                        localField: "bloodGroup",
                        foreignField: "_id",
                        as: "bloodGroup"
                    }
                },
                {
					$lookup:
					{
						from: "referraltypes",
						localField: "referalType",
						foreignField: "_id",
						as: "referalType"
					}
                },
                {
					$lookup:
					{
						from: "admission-types",
						localField: "admissionType",
						foreignField: "_id",
						as: "admissionType"
					}
                },
                {$lookup:
                    {
                      from: "course_programs",
                      localField: "courseprogram",
                      foreignField: "_id",
                      as: "courseprogramd"
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
                {
                    $lookup:
                    {
                        from: "hostels",
                        localField: "hostel",
                        foreignField: "_id",
                        as: "hosteld"
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
	async fetchbyBatch(batch){
		try{

            return await studentDetailsSchema.aggregate([

                {
                    $match: {
                        batch: ObjectId(batch)
                    }
                },
                {
                    $lookup:
                    {
                        from: "institutions",
                        localField: "institution",
                        foreignField: "_id",
                        as: "institutiond"
                    }
                },
                {
                    $lookup:
                    {
                        from: "nationalities",
                        localField: "nationality",
                        foreignField: "_id",
                        as: "nationalityd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "religions",
                        localField: "religion",
                        foreignField: "_id",
                        as: "religiond"
                    }
                },
                {
                    $lookup:
                    {
                        from: "communities",
                        localField: "community",
                        foreignField: "_id",
                        as: "communityd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "castes",
                        localField: "caste",
                        foreignField: "_id",
                        as: "casted"
                    }
                },
                {
                    $lookup:
                    {
                        from: "admissioncategories",
                        localField: "admissionCategory",
                        foreignField: "_id",
                        as: "admissionCategoryd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mothertongues",
                        localField: "motherTongue",
                        foreignField: "_id",
                        as: "motherTongued"
                    }
                },
                {
                    $lookup:
                    {
                        from: "mothertongues",
                        localField: "secondLanguage",
                        foreignField: "_id",
                        as: "secondLanguaged"
                    }
                },
                {
                    $lookup:
                    {
                        from: "genders",
                        localField: "gender",
                        foreignField: "_id",
                        as: "genderd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "marital-statuses",
                        localField: "maritalStatus",
                        foreignField: "_id",
                        as: "maritalStatusd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "bloodgroups",
                        localField: "bloodGroup",
                        foreignField: "_id",
                        as: "bloodGroupd"
                    }
                },
                {
                    $lookup:
                    {
                        from: "referraltypes",
                        localField: "referalType",
                        foreignField: "_id",
                        as: "referalTyped"
                    }
                },
                {
                    $lookup:
                    {
                        from: "admission-types",
                        localField: "admissionType",
                        foreignField: "_id",
                        as: "admissionTyped"
                    }
                },
                {
                    $lookup:
                    {
                        from: "course_programs",
                        localField: "courseprogram",
                        foreignField: "_id",
                        as: "courseprogramd"
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
                {
                    $lookup:
                    {
                        from: "hostels",
                        localField: "hostel",
                        foreignField: "_id",
                        as: "hosteld"
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
    

	async countstu() {

		try {
            let response = await studentDetailsSchema.aggregate([
                
                    { $group: { _id: null, count: { $sum: 1 } } }

            ]);
            return { 
                status: "success", 
                result: response
        };
           

		} catch (err) {
			return { status: "error", err: err };
		}

	}



    // async countstuchart() {

	// 	try {
    //         let response = await studentDetailsSchema.aggregate([
    //             {
    //                 $lookup:
    //                      {
    //                          from: "institutions",
    //                          localField: "institution",
    //                          foreignField: "_id",
    //                          as: "institutiond"
    //                      }  
    //                  },
    //                  { $group: { _id: null, myCount: { $sum: 1 } } }

    //         ]);
    //         return { 
    //             status: "success", 
    //             result: response
    //     };
           

	// 	} catch (err) {
	// 		return { status: "error", err: err };
	// 	}

    // }
    
    async countstuchart() {

		try {
            let response = await studentDetailsSchema.aggregate([
             
                {
             $lookup:
                  {
                      from: "institutions",
                      localField: "institution",
                      foreignField: "_id",
                      as: "institutiond"
                  }  
              },
              {
                  $group:
                  {
                      _id:"$institutiond.institution_name",
                        "numOfStudent":{$sum:1},
                      "listOfStudents":{$push:"$firstName"}
                  }
              }


            ]);
            return { 
                status: "success", 
                result: response
        };
           

		} catch (err) {
			return { status: "error", err: err };
		}

    }
    
    async fetchStudentAttendenceDetails2(attendenceDetails){
		try{
			let section = attendenceDetails.section;
			let attendenceDate = attendenceDetails.attendenceDate;
			return await studentDetailsSchema.aggregate([
				{
					$lookup:
					  {
						from: "student-attendences",
						localField: "studentId",
						foreignField: "_id",
						as: "studentDetails"
					  }
				 },{
					$match: {
						section: ObjectId(section),
						attendenceDate: attendenceDate

					}
                }	
            //     {
            //       $group:
            //       {
            //           _id:"$studentDetails.institution_name",
            //             "numOfStudent":{$sum:1},
            //           "listOfStudents":{$push:"$firstName"}
            //       }
            //   }
			]);
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}


}
module.exports = new studentDetailsController();