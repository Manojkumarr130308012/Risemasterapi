const router = require('express').Router();
const communityController = require('./../controller/community');

router.post('/add', async (req, res) => {
	const response = await communityController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await communityController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await communityController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await communityController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await communityController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;