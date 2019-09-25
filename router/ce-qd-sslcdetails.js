const router = require('express').Router();
const sslcDetailsController = require('./../controller/ce-qd-sslcdetails');

router.post('/add', async (req, res) => {
	const response = await sslcDetailsController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await sslcDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await sslcDetailsController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await sslcDetailsController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await sslcDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await sslcDetailsController.aggregation();
	res.send(response);
	
})


module.exports = router;