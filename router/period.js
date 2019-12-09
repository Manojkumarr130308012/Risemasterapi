const router = require('express').Router();
const periodController = require('./../controller/period');

router.post('/add', async (req, res) => {
	const response = await periodController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await periodController.fetch();
	res.send(response);
})

router.get('/fetchPeriods', async (req, res) => {
	const response = await periodController.fetchPeriods();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await periodController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await periodController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await periodController.update(req.query.id, req.body);
	res.send(response);
})
module.exports = router;