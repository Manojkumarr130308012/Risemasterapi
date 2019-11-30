const router = require('express').Router();
const subjectClassificationController = require('./../controller/subject-classification');

router.post('/add', async (req, res) => {
	const response = await subjectClassificationController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectClassificationController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectClassificationController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectClassificationController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectClassificationController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectClassificationController.aggregation();
	res.send(response);
})
module.exports = router;