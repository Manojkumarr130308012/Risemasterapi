const router = require('express').Router();
const scholarshipCategoryController = require('./../controller/scholarshipCategory');

router.post('/add', async (req, res) => {
	const response = await scholarshipCategoryController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await scholarshipCategoryController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await scholarshipCategoryController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await scholarshipCategoryController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await scholarshipCategoryController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;