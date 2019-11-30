const router = require('express').Router();
const subjectCategoryController = require('./../controller/subject-category');

router.post('/add', async (req, res) => {
	const response = await subjectCategoryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectCategoryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectCategoryController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectCategoryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectCategoryController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectCategoryController.aggregation();
	res.send(response);
})
module.exports = router;