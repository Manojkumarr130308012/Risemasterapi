const router = require('express').Router();
const subjectTopicCoverageController = require('./../controller/subject-topic-coverage');

router.post('/add', async (req, res) => {
	const response = await subjectTopicCoverageController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectTopicCoverageController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectTopicCoverageController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectTopicCoverageController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectTopicCoverageController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectTopicCoverageController.aggregation();
	res.send(response);
})
module.exports = router;