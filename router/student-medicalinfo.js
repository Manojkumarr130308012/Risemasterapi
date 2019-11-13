const router = require('express').Router();
const studentMedicalController = require('./../controller/student-medicalinfo');

router.post('/add', async (req, res) => {
	const response = await studentMedicalController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentMedicalController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentMedicalController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentMedicalController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentMedicalController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentMedicalController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentMedicalController.fetchbyId(req.query.stuId);
	res.send(response);
})
module.exports = router;