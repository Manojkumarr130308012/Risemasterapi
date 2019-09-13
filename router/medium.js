const router = require('express').Router();
const mediumController = require('./../controller/medium');

router.post('/add', async (req, res) => {
	const response = await mediumController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await mediumController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await mediumController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await mediumController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await mediumController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;