const router = require('express').Router();
const studentDetailsController = require('./../controller/student-details');

router.post('/add', async (req, res) => {
	const response = await studentDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyVehicleId', async (req, res) => {
	const response = await studentDetailsController.fetchbyVehicleId(req.query.IdValue);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentDetailsController.aggregation();
	res.send(response);
})
module.exports = router;