const router = require('express').Router();
const studentIdentityController = require('./../controller/student-identity');

router.post('/add', async (req, res) => {
	const response = await studentIdentityController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentIdentityController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentIdentityController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentIdentityController.fetchbyId(req.query.stuId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentIdentityController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentIdentityController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentIdentityController.aggregation();
	res.send(response);
})
module.exports = router;