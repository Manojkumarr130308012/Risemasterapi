const router = require('express').Router();
const subCategoryController = require('./../controller/subCategory');

router.post('/add', async (req, res) => {
	const response = await subCategoryController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await subCategoryController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await subCategoryController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await subCategoryController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await subCategoryController.update(req.query.id, req.body);
	res.send(response);
})

router.get('/aggregation', async (req, res) =>{
	let response = await subCategoryController.aggregation();
	res.send(response);
	
})
module.exports = router;