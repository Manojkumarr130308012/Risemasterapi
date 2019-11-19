const router = require('express').Router();
const stageDetailsController = require('./../controller/stage-details');

router.post('/add', async (req, res) => {
	const response = await stageDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await stageDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await stageDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyVehicleId', async (req, res) => {
	const response = await stageDetailsController.fetchbyVehicleId(req.query.IdValue);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await stageDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await stageDetailsController.update(req.query.id, req.body);
	console.log("res2",response);
	res.send(response);
})

module.exports = router;