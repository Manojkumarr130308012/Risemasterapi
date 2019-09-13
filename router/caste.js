const router = require('express').Router();
const casteController = require('./../controller/caste');

router.post('/add', async (req, res) => {
	const response = await casteController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await casteController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await casteController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await casteController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await casteController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;