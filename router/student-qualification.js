const router = require('express').Router();
const studentQualificationController = require('./../controller/student-qualification');

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
module.exports = router;