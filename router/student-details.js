const router = require('express').Router();
const studentDetailsController = require('./../controller/student-details');

router.post('/add', async (req, res) => {
	const response = await studentDetailsController.add(req.body);
	res.send(response);
})
router.post('/convert', async (req, res) => {
	const response = await studentDetailsController.convert(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentDetailsController.fetch();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentDetailsController.fetchbyId(req.query.id);
	res.send(response);
})
router.get('/fetchbyBatch', async (req, res) => {
	const response = await studentDetailsController.fetchbyBatch(req.query.batch);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentDetailsController.aggregation();
	res.send(response);
})
router.get('/countdtu', async function  (req, res) {
	let response = await studentDetailsController.countstu();
	res.send(response);
})

router.get('/countstuchart', async function  (req, res) {
	let response = await studentDetailsController.countstuchart();
	res.send(response);
})
module.exports = router;