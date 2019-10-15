const router = require('express').Router();
const qualificationDetailsController = require('./../controller/ce-qualificationdetails');

router.post('/add', async (req, res) => {
	const response = await qualificationDetailsController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await qualificationDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await qualificationDetailsController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await qualificationDetailsController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await qualificationDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await qualificationDetailsController.aggregation();
	res.send(response);
	
})


module.exports = router;