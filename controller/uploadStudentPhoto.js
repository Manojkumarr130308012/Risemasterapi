var fs = require('fs');
const studentPhotoSchema  = require('../model/uploadStudentPhoto');
const config = require('./../config');

class studentPhotoController{

    async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new studentPhotoSchema({
            sPhoto : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'Successfully added', result:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.sPhoto}`};
    }

    saveProfilePic(fileMeta){
        return fileMeta.path;
    }
}
module.exports = new studentPhotoController;