const router = require('express').Router();
const subjectMarkDefinitionController = require('./../controller/subject-mark-definition');

router.post('/add', async (req, res) => {
	const response = await subjectMarkDefinitionController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectMarkDefinitionController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectMarkDefinitionController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectMarkDefinitionController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectMarkDefinitionController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectMarkDefinitionController.aggregation();
	res.send(response);
})
module.exports = router;