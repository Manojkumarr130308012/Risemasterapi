var fs = require('fs');
const Uploadimage  = require('../model/upload');
const config = require('./../config');

class uploadController{

    async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new Uploadimage({
            logoLocation : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'successfully added', result:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.logoLocation}`};
    }

    saveProfilePic(fileMeta){
        return fileMeta.path;
    }


    async list(request){

    if(request.institution_name){
        searchParam.institution_name = request.institution_name;
    }

    if(request.institution_code){
        searchParam.institution_code = request.institution_code;
    }

    if(request.tagline){
        searchParam.tagline = request.tagline;
    }

    if(request.address){
        searchParam.address = request.address;
    }
    if(request.phone){
        searchParam.phone = request.phone;
    }

    if(request.mobile){
        searchParam.mobile = request.mobile;
    }

    if(request.website){
        searchParam.website = request.website;
    }

    if(request.email){
        searchParam.email = request.email;
    }

    if(request.principal){
        searchParam.principal = request.principal;
    }

    if(request.ao){
        searchParam.ao = request.ao;
    }

    return await Institution.find(searchParam);
    }
}
module.exports = new uploadController;