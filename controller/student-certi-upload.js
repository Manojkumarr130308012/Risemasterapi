var fs = require('fs');
const certificateUploadSchema  = require('../model/student-certi-upload');
const config = require('./../config');

class certificateUploadController{

    async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new certificateUploadSchema({
            fileLocation : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'Successfully added', fileResult:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.fileLocation}`};
    }
    saveProfilePic(fileMeta){
        return fileMeta.path;
    }

}
module.exports = new certificateUploadController;