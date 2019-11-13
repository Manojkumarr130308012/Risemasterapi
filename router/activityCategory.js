const router = require('express').Router();
const activityCategoryController = require('./../controller/activityCategory');

router.post('/add', async (req, res) => {
	const response = await activityCategoryController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await activityCategoryController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await activityCategoryController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await activityCategoryController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await activityCategoryController.update(req.query.id, req.body);
	res.send(response);
})

router.get('/aggregation', async (req, res) =>{
	let response = await activityCategoryController.aggregation();
	res.send(response);
	
})
module.exports = router;