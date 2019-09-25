const router = require('express').Router();
const diplomaDetailsController = require('./../controller/ce-qd-diplomadetails');

router.post('/add', async (req, res) => {
	const response = await diplomaDetailsController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await diplomaDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await diplomaDetailsController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await diplomaDetailsController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await diplomaDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await diplomaDetailsController.aggregation();
	res.send(response);
	
})


module.exports = router;