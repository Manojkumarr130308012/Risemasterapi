const router = require('express').Router();
const subjectTypeController = require('./../controller/subject-type');

router.post('/add', async (req, res) => {
	const response = await subjectTypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectTypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectTypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectTypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectTypeController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectTypeController.aggregation();
	res.send(response);
})
module.exports = router;