const basicDetailsSchema = require('../model/ce-basicdetails');
const errorHandler = require('../utils/error.handler');
const genderSchema = require('./../model/gender');
const institutionSchema = require('./../model/institution');
const admissionTypeSchema = require('./../model/admission-type');
const boardSchema = require('./../model/boardOfEducation');
const referralTypeSchema = require('./../model/referralType');
const scholarshipCategorySchema = require('./../model/scholarshipCategory');
const courseCategorySchema = require('./../model/course-category');
const courseProgramSchema = require('./../model/course-program');
const nationalitySchema = require('./../model/nationality');
const religionSchema = require('./../model/religion');
const communitySchema = require('./../model/community');
const casteSchema = require('./../model/caste');
class basicDetailsController{
	async add(newDetails){
		try{
			let response  = await basicDetailsSchema.create(newDetails);
			// console.log(response);
			let id = response._id;
			console.log(id);
			let CEId = await basicDetailsSchema.findOneAndUpdate({'_id':id}, { $inc: { CEId: 1 }});
			this.saveID(id, CEId);
			response.CEId = CEId;
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
	
	async saveID(canId, CEId){
        try{
           return  await basicDetailsSchema.update({_id: canId}, {CEId: CEId})
        } catch(err){
            console.log(err);
        }
	}
	
	async validateId(res, CEId, canId){
        try{
            let response = await basicDetailsSchema.findOne({
                CEId: CEId
            });

            if(!response){
                throw new Error('invalid Id');
            }

            global.userSession = response;
        } catch(error){
            res.send({
                status: 'error',
                msg: 'Invalid ID'
            });
        }
    }
	async fetchdata(id){
		try{
			let response = await basicDetailsSchema.find({'_id':id});
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
			let response = await basicDetailsSchema.find({});
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
			let response = await basicDetailsSchema.deleteOne({_id: id});
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
            let response = await basicDetailsSchema.updateOne({_id: id}, body);
            return { status: "success", result: response };

        } catch (error) {
            return { status: "error", error: error };
        }

	}
	async aggregation() {
		try {
			
            let result1 =  await institutionSchema.aggregate([
				{$project: {
					_id:0
					
		 }}
		]);
		let Institution = await basicDetailsSchema.aggregate([
				{$lookup:
					  {
						from: "institutions",
						localField: "institution",
						foreignField: "_id",
						as: "InstitutionDetails"
					  }
				 },			 
				]);	
		    let result2 =  await genderSchema.aggregate([
					{$project: {
						_id:0
						
			 }}
			]);
			let Gender = await basicDetailsSchema.aggregate([
					{$lookup:
						  {
							from: "genders",
							localField: "gender",
							foreignField: "_id",
							as: "GenderDetails"
						  }
					 },			 
					]);	
			let result3 =  await admissionTypeSchema.aggregate([
						{$project: {
							_id:0
							
				 }}
				]);
		 let AdmissionType = await basicDetailsSchema.aggregate([
						{$lookup:
							  {
								from: "admission-types",
								localField: "admissionType",
								foreignField: "_id",
								as: "AdmissionTypeDetails"
							  }
						 },			 
						]);	
		  let result4 =  await boardSchema.aggregate([
							{$project: {
								_id:0
								
					 }}
					]);
			 let BoardOfEducation = await basicDetailsSchema.aggregate([
							{$lookup:
								  {
									from: "boards",
									localField: "board",
									foreignField: "_id",
									as: "BoardDetails"
								  }
							 },			 
							]);	
			let result5 =  await referralTypeSchema.aggregate([
								{$project: {
									_id:0
									
						 }}
						]);
		    let ReferenceType = await basicDetailsSchema.aggregate([
								{$lookup:
									  {
										from: "referroraltypes",
										localField: "referenceType",
										foreignField: "_id",
										as: "ReferenceTypeDetails"
									  }
								 },			 
								]);	
			let result6 =  await scholarshipCategorySchema.aggregate([
									{$project: {
										_id:0
										
							 }}
							]);
			let ScholarshipCategory = await basicDetailsSchema.aggregate([
									{$lookup:
										  {
											from: "scholarshipcategories",
											localField: "scholarshipCategory",
											foreignField: "_id",
											as: "scholarshipCategoryDetails"
										  }
									 },			 
									]);	
			let result7 =  await courseCategorySchema.aggregate([
										{$project: {
											_id:0
											
								 }}
								]);
		   let CourseCategory = await basicDetailsSchema.aggregate([
										{$lookup:
											  {
												from: "course-categories",
												localField: "courseCategory",
												foreignField: "_id",
												as: "courseCategoryDetails"
											  }
										 },			 
										]);	
			let result8 =  await courseProgramSchema.aggregate([
											{$project: {
												_id:0
												
									 }}
									]);
			let CourseProgram = await basicDetailsSchema.aggregate([
											{$lookup:
												  {
													from: "course-programs",
													localField: "courseProgram",
													foreignField: "_id",
													as: "courseProgramDetails"
												  }
											 },			 
											]);	
										
			let result9 =  await nationalitySchema.aggregate([
									{$project: {
									_id:0										
								 }}
								]);
			let Nationality = await basicDetailsSchema.aggregate([
								{$lookup:
									 {
										from: "nationalities",
										localField: "nationality",
									    foreignField: "_id",
										as: "nationalityDetails"
									 }
								 },			 
							]);	
			let result10 =  await religionSchema.aggregate([
								{$project: {
								_id:0										
							 }}
							]);
		   let Religion = await basicDetailsSchema.aggregate([
							{$lookup:
								 {
									from: "religions",
									localField: "religion",
									foreignField: "_id",
									as: "ReligionDetails"
								 }
							 },			 
						]);	
		  let result11 =  await communitySchema.aggregate([
							{$project: {
							_id:0										
						 }}
						]);
	      let Community = await basicDetailsSchema.aggregate([
						{$lookup:
							 {
								from: "communities",
								localField: "community",
								foreignField: "_id",
								as: "communityDetails"
							 }
						 },			 
					]);	
		  let result12 =  await casteSchema.aggregate([
						{$project: {
						_id:0										
					 }}
					]);
	      let Caste = await basicDetailsSchema.aggregate([
					{$lookup:
						 {
							from: "castes",
							localField: "caste",
							foreignField: "_id",
							as: "casteDetails"
						 }
					 },			 
				]);	

				return {
					Institution,
					Gender,
					AdmissionType,
					BoardOfEducation,
					ReferenceType,
					ScholarshipCategory,
					CourseCategory,
					CourseProgram,
					Nationality,
					Religion,
					Community,
					Caste

				};
				
		} catch (error) {
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
    }

}
module.exports = new basicDetailsController();