const router = require('express').Router();
const maritalStatusController = require('./../controller/marital-status');

router.post('/add', async (req, res) => {
	const response = await maritalStatusController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await maritalStatusController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await maritalStatusController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await maritalStatusController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await maritalStatusController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;