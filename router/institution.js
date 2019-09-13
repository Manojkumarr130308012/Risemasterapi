const router = require('express').Router();
const institutionController = require('./../controller/institution');

router.post('/add', async (req, res) => {
	const response = await institutionController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await institutionController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await institutionController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await institutionController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await institutionController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;