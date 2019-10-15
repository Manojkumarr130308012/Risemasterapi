var fs = require('fs');
const Uploadimage  = require('../model/driverFileUpload');
const config = require('./../config');

class uploadController{

    async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new Uploadimage({
            photoLocation : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'Successfully added', driverFileResult1:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.photoLocation}`};
    }
    saveProfilePic(fileMeta){
        return fileMeta.path;
    }


    async saveFilepath2(profilePicMeta2){

        let filePath2 = profilePicMeta2 ? this.saveProfilePic2(profilePicMeta2) : '';

        let fileloc2 = new Uploadimage({
            fileLocation : filePath2

        })

        let FileDetails2 = await fileloc2.save();
        return { status: 'Successfully added', driverFileResult2:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails2.fileLocation}`};
    }

    saveProfilePic2(fileMeta2){
        return fileMeta2.path;
    }


    async list(request){

    if(request.name){
        searchParam.name = request.name;
    }

    if(request.vehicleNo){
        searchParam.vehicleNo = request.vehicleNo;
    }

    if(request.fathersName){
        searchParam.fathersName = request.fathersName;
    }

    if(request.dob){
        searchParam.dob = request.dob;
    }
    if(request.joiningYear){
        searchParam.joiningYear = request.joiningYear;
    }

    if(request.personalContactNo){
        searchParam.personalContactNo = request.personalContactNo;
    }

    if(request.address){
        searchParam.address = request.address;
    }

    if(request.drivingLicenseNo){
        searchParam.drivingLicenseNo = request.drivingLicenseNo;
    }

    if(request.aadhaarNo){
        searchParam.aadhaarNo = request.aadhaarNo;
    }

    if(request.badgeNo){
        searchParam.badgeNo = request.badgeNo;
    }

    if(request.badgeExpiry){
        searchParam.badgeExpiry = request.badgeExpiry;
    }

    if(request.homeContactNo){
        searchParam.homeContactNo = request.homeContactNo;
    }

    if(request.licenseDOIDate){
        searchParam.licenseDOIDate = request.licenseDOIDate;
    }

    if(request.licenseExpDate){
        searchParam.badgeNo = request.licenseExpDate;
    }

    if(request.referencePersonName){
        searchParam.referencePersonName = request.referencePersonName;
    }

    if(request.referencePersonContactNo){
        searchParam.referencePersonContactNo = request.referencePersonContactNo;
    }

    return await Driver.find(searchParam);
    }
}
module.exports = new uploadController;