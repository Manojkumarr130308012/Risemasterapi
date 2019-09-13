const router = require('express').Router();
const paymentMethodController = require('./../controller/paymentMethod');

router.post('/add', async (req, res) => {
	const response = await paymentMethodController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await paymentMethodController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await paymentMethodController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await paymentMethodController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await paymentMethodController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;