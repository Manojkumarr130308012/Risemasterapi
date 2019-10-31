const router = require('express').Router();
const paymentDetailsController = require('./../controller/ce-paymentdetails');

router.post('/add', async (req, res) => {
	const response = await paymentDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await paymentDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await paymentDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchpayment', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await paymentDetailsController.fetchpayment(req.query.canId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await paymentDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await paymentDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await paymentDetailsController.aggregation();
	res.send(response);
	
})

module.exports = router;