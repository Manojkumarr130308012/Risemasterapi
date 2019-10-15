var fs = require('fs');
const Uploadimage  = require('../model/staffFileUpload');
const config = require('./../config');

class uploadController{

    async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new Uploadimage({
            photoLocation : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'Successfully added', staffFileResult:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.photoLocation}`};
    }
    saveProfilePic(fileMeta){
        return fileMeta.path;
    }


    async list(request){

    if(request.staffCode){
        searchParam.staffCode = request.staffCode;
    }

    if(request.stafftype){
        searchParam.stafftype = request.stafftype;
    }

    if(request.staffrole){
        searchParam.staffrole = request.staffrole;
    }

    if(request.salutation){
        searchParam.salutation = request.salutation;
    }
    if(request.firstName){
        searchParam.firstName = request.firstName;
    }

    if(request.lastName){
        searchParam.lastName = request.lastName;
    }

    if(request.designation){
        searchParam.designation = request.designation;
    }

    if(request.doj){
        searchParam.doj = request.doj;
    }

    if(request.gender){
        searchParam.gender = request.gender;
    }

    if(request.dob){
        searchParam.dob = request.dob;
    }

    if(request.employeeCode){
        searchParam.employeeCode = request.employeeCode;
    }

    if(request.paytype){
        searchParam.paytype = request.paytype;
    }

    if(request.emailId){
        searchParam.emailId = request.emailId;
    }

    if(request.mobileNo){
        searchParam.mobileNo = request.mobileNo;
    }

    if(request.emergencyNo){
        searchParam.emergencyNo = request.emergencyNo;
    }

    if(request.maritalstatus){
        searchParam.maritalstatus = request.maritalstatus;
    }

    if(request.bloodgroup){
        searchParam.bloodgroup = request.bloodgroup;
    }

    return await StaffProfile.find(searchParam);
    }
}
module.exports = new uploadController;