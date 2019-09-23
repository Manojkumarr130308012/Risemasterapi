const express = require('express');
const router = express.Router();
const server = express();

const fileController = require('./../controller/driverFileUpload');

let multer       = require('multer');
global.upload    = multer({dest: 'uploads/driverFiles/'});
server.use('/driverFiles', express.static('driverFiles'));

router.post('/upload',upload.single('photo'), async (req, res) => {

    try{
        let response = await fileController.saveFilepath(req.file);
        res.send(response);
    } catch(err) {
        console.log(err);
        res.status(500).send(JSON.stringify({status:'error', 'message':err.message}));
    }
});

router.post('/fileupload',upload.single('file'), async (req, res) => {

    try{
        let response = await fileController.saveFilepath2(req.file);
        res.send(response);
    } catch(err) {
        console.log(err);
        res.status(500).send(JSON.stringify({status:'error', 'message':err.message}));
    }
});

router.get('/list', async (req, res) => {
    try{
        let response = await fileController.list(req.query);
        res.send({status: 'success', result: response});
    } catch(err) {
        console.log(err);
        res.status(500).send(JSON.stringify({status:'error', 'message':err.message}));
    }
})

module.exports = router;