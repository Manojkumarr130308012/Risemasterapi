var fs = require('fs');
const Uploadimage  = require('../model/ce-qd-fileupload');
const config = require('./../config');

class uploadController{

    async saveFilepath(profilePicMeta){

        let filePath = profilePicMeta ? this.saveProfilePic(profilePicMeta) : '';

        let fileloc = new Uploadimage({
            photoLocation : filePath

        })

        let FileDetails = await fileloc.save();
        return { status: 'Successfully added', qdFileResult1:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails.photoLocation}`};
    }
    saveProfilePic(fileMeta){
        return fileMeta.path;
    }

}
module.exports = new uploadController;