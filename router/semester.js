const router = require('express').Router();
const semesterController = require('./../controller/semester');

router.post('/add', async (req, res) => {
	const response = await semesterController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await semesterController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await semesterController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await semesterController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await semesterController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await semesterController.aggregation();
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	const response = await semesterController.fetchbyIns(req.query.institution);
	res.send(response);
})
module.exports = router;