const router = require('express').Router();
const subjectAddController = require('./../controller/subject-add');

router.post('/add', async (req, res) => {
	const response = await subjectAddController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectAddController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectAddController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectAddController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectAddController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectAddController.aggregation(req.query.id);
	res.send(response);
})
router.get('/fetchByDep', async (req, res) => {
	const response = await subjectAddController.fetchByDep(req.query.department);
	res.send(response);
})
router.get('/fetchBySem', async (req, res) => {
	const response = await subjectAddController.fetchBySem(req.query.semester);
	res.send(response);
})
router.post('/fetchsubject', async (req, res) => {
	const response = await subjectAddController.fetchsubject(req.body);
	res.send(response);
})
module.exports = router;