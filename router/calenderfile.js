const express = require('express');
const router = express.Router();
const server = express();

const fileController = require('./../controller/calenderfile');


let multer       = require('multer');
global.upload    = multer({dest: 'uploads/calenderfile/'});
server.use('/calenderfile', express.static('calenderfile'));


router.post('/upload',upload.single('photo'), async (req, res) => {

    try{
        let response = await fileController.saveFilepath(req.file);
        res.send(response);
    } catch(error) {
        console.log(error);
        res.status(500).send(JSON.stringify({status:'error', 'message':error.message}));
    }
});

// router.get('/list', async (req, res) => {
//     try{
//         let response = await fileController.list(req.query);
//         res.send({status: 'success', result: response});
//     } catch(error) {
//         console.log(error);
//         res.status(500).send(JSON.stringify({status:'error', 'message':error.message}));
//     }
// })

module.exports = router;