const router = require('express').Router();
const driverController = require('./../controller/driverMaster');

router.post('/add', async (req, res) => {

	const response = await driverController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {

	const response = await driverController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {

	const response = await driverController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await driverController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await driverController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await driverController.aggregation();
	res.send(response);
})

module.exports = router;