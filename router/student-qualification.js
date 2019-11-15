// const router = require('express').Router();
// const server = require('express').Router();
const studentQualificationController = require('./../controller/student-qualification');
const express = require('express');
const router = express.Router();
const server = express();
let multer       = require('multer');
global.upload    = multer({dest: 'uploads/qdFile/'});
server.use('/qdFile', express.static('qdFile'));
router.post('/add', async (req, res) => {
	const response = await studentQualificationController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentQualificationController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentQualificationController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentQualificationController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentQualificationController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentQualificationController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentQualificationController.fetchbyId(req.query.stuId);
	res.send(response);
})
router.post('/upload', upload.single('file'), async (req, res) => {
	try {
		let response = await studentQualificationController.saveFilepath(req.file);
		res.send(response);
	} catch (error) {
		console.log(error);
		res.status(500).send(JSON.stringify({ status: 'error', 'message': error.message }));
	}
});
module.exports = router;