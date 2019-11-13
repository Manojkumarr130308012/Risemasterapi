const router = require('express').Router();
const studentOtherController = require('./../controller/student-other');

router.post('/add', async (req, res) => {
	const response = await studentOtherController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentOtherController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentOtherController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentOtherController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentOtherController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentOtherController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentOtherController.fetchbyId(req.query.stuId);
	res.send(response);
})
module.exports = router;