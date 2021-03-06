const router = require('express').Router();
const sectionController = require('./../controller/section');

router.post('/add', async (req, res) => {
	const response = await sectionController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await sectionController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await sectionController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbycourseprogram', async (req, res) => {
	const response = await sectionController.fetchbycourseprogram(req.query.courseprogram);
	res.send(response);
})
router.get('/fetchdataactive', async (req, res) => {	
	const response = await sectionController.fetchdataactive(req.query.status);
	res.send(response);
})

router.get('/fetchbySemester', async (req, res) => {
	const response = await sectionController.fetchbySemester(req.query.semester);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await sectionController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await sectionController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await sectionController.aggregation();
	res.send(response);
})
module.exports = router;