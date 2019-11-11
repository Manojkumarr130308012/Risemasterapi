const router = require('express').Router();
const studentContactController = require('./../controller/student-contact');

router.post('/add', async (req, res) => {
	const response = await studentContactController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentContactController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentContactController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchcontact', async (req, res) => {
	const response = await studentContactController.fetchcontact(req.query.stuId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentContactController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentContactController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentContactController.aggregation();
	res.send(response);
})
module.exports = router;