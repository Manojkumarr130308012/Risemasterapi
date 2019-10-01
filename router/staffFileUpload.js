const express = require('express');
const router = express.Router();
const server = express();

const fileController = require('./../controller/staffFileUpload');

let multer       = require('multer');
global.upload    = multer({dest: 'uploads/staffFiles/'});
server.use('/staffFiles', express.static('staffFiles'));

router.post('/upload',upload.single('photo'), async (req, res) => {

    try{
        let response = await fileController.saveFilepath(req.file);
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