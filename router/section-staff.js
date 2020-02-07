const router = require('express').Router();
const sectionStaffController = require('./../controller/section-staff');

router.post('/add', async (req, res) => {
	const response = await sectionStaffController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await sectionStaffController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await sectionStaffController.fetchdata(req.query.id);
	res.send(response);
	console.log(response);
})
router.get('/fetchbyIns', async (req, res) => {
	const response = await sectionStaffController.fetchbyIns(req.query.institution);
	res.send(response);
})
router.get('/fetchbySection', async (req, res) => {
	const response = await sectionStaffController.fetchbySection(req.query.section);
	res.send(response);
})
router.get('/fetchbySubject', async (req, res) => {
	const response = await sectionStaffController.fetchbySubject(req.query.subject);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await sectionStaffController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await sectionStaffController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await sectionStaffController.aggregation();
	res.send(response);
})
module.exports = router;