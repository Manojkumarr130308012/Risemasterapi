const express = require('express');
const router = express.Router();
const server = express();

const uploadController = require('./../controller/ce-qd-fileupload');

let multer       = require('multer');
global.upload    = multer({dest: 'uploads/qdFile/'});
server.use('/qdFile', express.static('qdFile'));

router.post('/upload',upload.single('photo'), async (req, res) => {
    try{
        let response = await uploadController.saveFilepath(req.file);
        res.send(response);
    } catch(error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status:'error', 'message':error.message}));
    }
});

module.exports = router;