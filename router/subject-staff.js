const router = require('express').Router();
const subjectStaffController = require('./../controller/subject-staff');

router.post('/add', async (req, res) => {
	const response = await subjectStaffController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectStaffController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectStaffController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectStaffController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectStaffController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await subjectStaffController.aggregation();
	res.send(response);	
})
router.get('/fetchBySubject', async (req, res) => {
	const response = await subjectStaffController.fetchBySubject(req.query.subject);
	res.send(response);
})
module.exports = router;