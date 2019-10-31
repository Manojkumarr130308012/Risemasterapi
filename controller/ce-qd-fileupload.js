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


    async saveFilepath2(profilePicMeta2){

        let filePath2 = profilePicMeta2 ? this.saveProfilePic2(profilePicMeta2) : '';

        let fileloc2 = new Uploadimage({
            fileLocation : filePath2

        })

        let FileDetails2 = await fileloc2.save();
        return { status: 'Successfully added', qdFileResult2:`${config.app.protocal}://${config.app.host}:${config.app.port}/${FileDetails2.fileLocation}`};
    }

    saveProfilePic2(fileMeta2){
        return fileMeta2.path;
    }


}
module.exports = new uploadController;