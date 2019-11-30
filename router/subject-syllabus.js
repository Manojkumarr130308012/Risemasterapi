const router = require('express').Router();
const subjectSyllabusController = require('./../controller/subject-syllabus');

router.post('/add', async (req, res) => {
	const response = await subjectSyllabusController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectSyllabusController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectSyllabusController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectSyllabusController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectSyllabusController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await subjectSyllabusController.aggregation();
	res.send(response);	
})
router.get('/fetchBySubject', async (req, res) => {
	const response = await subjectSyllabusController.fetchBySubject(req.query.subject);
	res.send(response);
})
module.exports = router;