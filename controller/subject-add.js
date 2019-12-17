const subjectAddSchema = require('./../model/subject-add');
const errorHandler = require('./../utils/error.handler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class subjectAddController{
	async add(newdetail){
		try{
			let response = await subjectAddSchema.create(newdetail);
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
			let response = await subjectAddSchema.find({});
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
			return await subjectAddSchema.aggregate([

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
						as: "Institutiond"
					}
				},
				{
					$lookup:
					{
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "departmentd"
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
						from: "subject_types",
						localField: "subjectType",
						foreignField: "_id",
						as: "subjectTyped"
					}
				},
				{
					$lookup:
					{
						from: "subject_categories",
						localField: "subjectCategory",
						foreignField: "_id",
						as: "subjectCategoryd"
					}
				},
				{
					$lookup:
					{
						from: "subject_classifications",
						localField: "subjectClassification",
						foreignField: "_id",
						as: "subjectClassificationd"
					}
				},
				{
					$lookup:
					{
						from: "subject_markdefinitions",
						localField: "markDefinition",
						foreignField: "_id",
						as: "markDefinitiond"
					}
				},
				{
					$lookup:
					{
						from: "subject_topiccoverages",
						localField: "topicCoverage",
						foreignField: "_id",
						as: "topicCoveraged"
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
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async fetchbyIns(institution){
		try{
			let response = await subjectAddSchema.find({'institution':institution});
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
			let response = await subjectAddSchema.deleteOne({_id: id});
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
            let response = await subjectAddSchema.updateOne({_id: id}, body);
            return { 
                status: "success",
                 result: response, 
                 message: "Updated Successfully" 
                };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation(id) {
        try {
			return await subjectAddSchema.aggregate([
				{
					$match: {
						institution: ObjectId(id)
					}
				},
				{
					$lookup:
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "department"
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogram"
					}
				},
				{
					$lookup:
					{
						from: "subject_types",
						localField: "subjectType",
						foreignField: "_id",
						as: "subjectType"
					}
				},
				{
					$lookup:
					{
						from: "subject_categories",
						localField: "subjectCategory",
						foreignField: "_id",
						as: "subjectCategory"
					}
				},
				{
					$lookup:
					{
						from: "subject_classifications",
						localField: "subjectClassification",
						foreignField: "_id",
						as: "subjectClassification"
					}
				},
				{
					$lookup:
					{
						from: "subject_markdefinitions",
						localField: "markDefinition",
						foreignField: "_id",
						as: "markDefinition"
					}
				},
				{
					$lookup:
					{
						from: "subject_topiccoverages",
						localField: "topicCoverage",
						foreignField: "_id",
						as: "topicCoverage"
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

	async fetchByDep(department){	
		try{
			return await subjectAddSchema.aggregate([

				{
					$match: {
						department: ObjectId(department)
					}
				},
				{
					$lookup:
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
						from: "semesters",
						localField: "semester",
						foreignField: "_id",
						as: "semesterd"
					}
				},
				{
					$lookup:
					{
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "department"
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogram"
					}
				},
				{
					$lookup:
					{
						from: "subject_types",
						localField: "subjectType",
						foreignField: "_id",
						as: "subjectType"
					}
				},
				{
					$lookup:
					{
						from: "subject_categories",
						localField: "subjectCategory",
						foreignField: "_id",
						as: "subjectCategory"
					}
				},
				{
					$lookup:
					{
						from: "subject_classifications",
						localField: "subjectClassification",
						foreignField: "_id",
						as: "subjectClassification"
					}
				},
				{
					$lookup:
					{
						from: "subject_markdefinitions",
						localField: "markDefinition",
						foreignField: "_id",
						as: "markDefinition"
					}
				},
				{
					$lookup:
					{
						from: "subject_topiccoverages",
						localField: "topicCoverage",
						foreignField: "_id",
						as: "topicCoverage"
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
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	async fetchBySem(semester){	
		try{
			return await subjectAddSchema.aggregate([

				{
					$match: {
						semester: ObjectId(semester)
					}
				},
				{
					$lookup:
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
						from: "departments",
						localField: "department",
						foreignField: "_id",
						as: "department"
					}
				},
				{
					$lookup:
					{
						from: "course_programs",
						localField: "courseprogram",
						foreignField: "_id",
						as: "courseprogram"
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
				{
					$lookup:
					{
						from: "subject_types",
						localField: "subjectType",
						foreignField: "_id",
						as: "subjectType"
					}
				},
				{
					$lookup:
					{
						from: "subject_categories",
						localField: "subjectCategory",
						foreignField: "_id",
						as: "subjectCategory"
					}
				},
				{
					$lookup:
					{
						from: "subject_classifications",
						localField: "subjectClassification",
						foreignField: "_id",
						as: "subjectClassification"
					}
				},
				{
					$lookup:
					{
						from: "subject_markdefinitions",
						localField: "markDefinition",
						foreignField: "_id",
						as: "markDefinition"
					}
				},
				{
					$lookup:
					{
						from: "subject_topiccoverages",
						localField: "topicCoverage",
						foreignField: "_id",
						as: "topicCoverage"
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
			
		} catch(error){
			return {
				status: "error",
				error: error
			};
		}
	}
	async fetchsubject(filterSubject) {
		//console.log('Filter Subject', filterSubject);
			try {
				let institution = filterSubject.institution;
				let department = filterSubject.department;
				let courseprogram = filterSubject.courseprogram;
				let batch = filterSubject.batch;
				let academicYear = filterSubject.academicYear;
				let semester = filterSubject.semester;
				 
				return await subjectAddSchema.aggregate([
					{

						$match: {
							institution: ObjectId(institution),
							department: ObjectId(department),
							courseprogram: ObjectId(courseprogram),
							batch: ObjectId(batch),
							academicYear: ObjectId(academicYear),
							semester: ObjectId(semester),
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
							from: "departments",
							localField: "department",
							foreignField: "_id",
							as: "departmentd"
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
							from: "semesters",
							localField: "semester",
							foreignField: "_id",
							as: "semesterd"
						}
					},
					{
						$lookup:
						{
							from: "subject_types",
							localField: "subjectType",
							foreignField: "_id",
							as: "subjectTyped"
						}
					},
					{
						$lookup:
						{
							from: "subject_categories",
							localField: "subjectCategory",
							foreignField: "_id",
							as: "subjectCategoryd"
						}
					},
					{
						$lookup:
						{
							from: "subject_classifications",
							localField: "subjectClassification",
							foreignField: "_id",
							as: "subjectClassificationd"
						}
					},
					{
						$lookup:
						{
							from: "subject_markdefinitions",
							localField: "markDefinition",
							foreignField: "_id",
							as: "markDefinitiond"
						}
					},
					{
						$lookup:
						{
							from: "subject_topiccoverages",
							localField: "topicCoverage",
							foreignField: "_id",
							as: "topicCoveraged"
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
					error: error
				};
			}
		}


}
module.exports = new subjectAddController();