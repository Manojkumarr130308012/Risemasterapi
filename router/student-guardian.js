const router = require('express').Router();
const studentGuardianController = require('./../controller/student-guardian');

router.post('/add', async (req, res) => {
	const response = await studentGuardianController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentGuardianController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentGuardianController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentGuardianController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentGuardianController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentGuardianController.aggregation();
	res.send(response);
})
module.exports = router;