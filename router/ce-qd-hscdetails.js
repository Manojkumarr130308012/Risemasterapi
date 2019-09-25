const router = require('express').Router();
const hscDetailsController = require('./../controller/ce-qd-hcsdetails');

router.post('/add', async (req, res) => {
	const response = await hscDetailsController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await hscDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await hscDetailsController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await hscDetailsController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await hscDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await hscDetailsController.aggregation();
	res.send(response);
	
})


module.exports = router;