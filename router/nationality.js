const router = require('express').Router();
const nationalityController = require('./../controller/nationality');

router.post('/add', async (req, res) => {
	const response = await nationalityController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await nationalityController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await nationalityController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await nationalityController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await nationalityController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;