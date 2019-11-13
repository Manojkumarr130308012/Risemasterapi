const router = require('express').Router();
const studentIdentityMarkController = require('./../controller/student-identitymark');

router.post('/add', async (req, res) => {
	const response = await studentIdentityMarkController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentIdentityMarkController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentIdentityMarkController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentIdentityMarkController.fetchbyId(req.query.stuId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentIdentityMarkController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentIdentityMarkController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentIdentityMarkController.aggregation();
	res.send(response);
})
module.exports = router;