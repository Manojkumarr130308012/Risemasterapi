const router = require('express').Router();
const bloodgroupController = require('./../controller/bloodgroup');
const multer = require('multer');

global.__basedir = __dirname;

// -> Multer Upload Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});
const upload = multer({storage: storage});

router.post('/add', async (req, res) => {
	const response = await bloodgroupController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bloodgroupController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bloodgroupController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await bloodgroupController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await bloodgroupController.update(req.query.id, req.body);
	res.send(response);
})
// -> Express Upload RestAPIs
router.post('/api/uploadfile', upload.single("uploadfile"),async (req, res) =>{
	const response = await bloodgroupController.importExcelData2MongoDB(__basedir + '/uploads/' + req.file.filename);
 
	res.send(response);
});
 

module.exports = router;