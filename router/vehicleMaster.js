const router = require('express').Router();
const vehicleController = require('./../controller/vehicleMaster');

router.post('/add', async (req, res) => {
	const response = await vehicleController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	
	const response = await vehicleController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {

	const response = await vehicleController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await vehicleController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await vehicleController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await vehicleController.aggregation();
	res.send(response);
})

module.exports = router;