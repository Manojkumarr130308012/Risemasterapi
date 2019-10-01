const router = require('express').Router();
const staffDetailsController = require('./../controller/staff-details');

router.post('/add', async (req, res) => {
	const response = await staffDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyProfileId', async (req, res) => {
	const response = await staffDetailsController.fetchbyProfileId(req.query.IdValue);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffDetailsController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;