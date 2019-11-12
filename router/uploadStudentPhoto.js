const express = require('express');
const router = express.Router();
const server = express();

const studentPhotoController = require('./../controller/uploadStudentPhoto');

let multer       = require('multer');
global.upload    = multer({dest: 'uploads/studentPhoto/'});
server.use('/studentPhoto', express.static('studentPhoto'));

router.post('/upload',upload.single('photo'), async (req, res) => {

    try{
        let response = await studentPhotoController.saveFilepath(req.file);
        res.send(response);
    } catch(err) {
        console.log(err);
        res.status(500).send(JSON.stringify({status:'error', 'message':err.message}));
    }
});

module.exports = router;