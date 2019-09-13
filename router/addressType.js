const router = require('express').Router();
const addressTypeController = require('./../controller/addressType');

router.post('/add', async (req, res) => {
	const response = await addressTypeController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await addressTypeController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await addressTypeController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await addressTypeController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await addressTypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;