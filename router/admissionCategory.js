const router = require('express').Router();
const admissionCategoryController = require('./../controller/admissionCategory');

router.post('/add', async (req, res) => {
	const response = await admissionCategoryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await admissionCategoryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await admissionCategoryController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await admissionCategoryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await admissionCategoryController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await admissionCategoryController.aggregation();
	res.send(response);
	
})

module.exports = router;