const router = require('express').Router();
const studentExtraController = require('./../controller/student-extracur');

router.post('/add', async (req, res) => {
	const response = await studentExtraController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentExtraController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentExtraController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentExtraController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentExtraController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentExtraController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentExtraController.fetchbyId(req.query.stuId);
	res.send(response);
})
module.exports = router;
