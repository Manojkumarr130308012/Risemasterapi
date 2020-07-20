const router = require('express').Router();
const calenderController = require('./../controller/calenderdata');

router.post('/add', async (req, res) => {
	const response = await calenderController.add(req.body);
	console.log('body',req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await calenderController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await calenderController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await calenderController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await calenderController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await calenderController.aggregation();
	res.send(response);	
})

router.get('/calenderdta', async (req, res) =>{
	let response = await calenderController.aggregationcal();
	res.send(response);	
})
module.exports = router;