const router = require('express').Router();
const staffProfileController = require('./../controller/staff-profile');

router.post('/add', async (req, res) => {
	const response = await staffProfileController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffProfileController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffProfileController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyStaffProfileId', async (req, res) => {
	const response = await staffProfileController.fetchbyStaffProfileId(req.query.id);
	res.send(response);
})
router.get('/fetchbyDepartment', async (req, res) => {
	const response = await staffProfileController.fetchbyDepartment(req.query.department);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffProfileController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffProfileController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await staffProfileController.aggregation();
	res.send(response);
})

module.exports = router;