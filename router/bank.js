const router = require('express').Router();
const bankController = require('./../controller/bank');

router.post('/add', async (req, res) => {
	const response = await bankController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bankController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await bankController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await bankController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await bankController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;