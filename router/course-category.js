const router = require('express').Router();
const courseCategoryController = require('./../controller/course-category');

router.post('/add', async (req, res) => {
	const response = await courseCategoryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseCategoryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseCategoryController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseCategoryController.fetchbyIns(req.query.institution);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await courseCategoryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await courseCategoryController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await courseCategoryController.aggregation();
	res.send(response);
})

module.exports = router;