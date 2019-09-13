const router = require('express').Router();
const referralTypeController = require('./../controller/referralType');

router.post('/add', async (req, res) => {
	const response = await referralTypeController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await referralTypeController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await referralTypeController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await referralTypeController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await referralTypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;