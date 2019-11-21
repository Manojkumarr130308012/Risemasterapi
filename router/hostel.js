const router = require('express').Router();
const hostelController = require('./../controller/hostel');

router.post('/add', async (req, res) => {
	const response = await hostelController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await hostelController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await hostelController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await hostelController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await hostelController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await hostelController.aggregation();
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	const response = await hostelController.fetchbyIns(req.query.institution);
	res.send(response);
})
module.exports = router;