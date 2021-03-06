const router = require('express').Router();
const stationController = require('./../controller/fillingStations');

router.post('/add', async (req, res) => {
	const response = await stationController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await stationController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await stationController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await stationController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await stationController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;