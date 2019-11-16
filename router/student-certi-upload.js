const express = require('express');
const router = express.Router();
const server = express();

const certificateUploadController = require('./../controller/student-certi-upload');

let multer       = require('multer');
global.upload    = multer({dest: 'uploads/certificate/'});
server.use('/certificate', express.static('certificate'));

router.post('/upload',upload.single('file'), async (req, res) => {
    try{
        let response = await certificateUploadController.saveFilepath(req.file);
        res.send(response);
    } catch(error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status:'error', 'message':error.message}));
    }
});

module.exports = router;