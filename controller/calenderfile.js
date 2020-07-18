var fs = require('fs');
const Uploadimage  = require('../model/calenderfile');
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

}

module.exports = new uploadController;