const router = require('express').Router();
const staffContactController = require('./../controller/staffContact');

router.post('/add', async (req, res) => {
	const response = await staffContactController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffContactController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffContactController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchcontact', async (req, res) => {
	const response = await staffContactController.fetchcontact(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffContactController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffContactController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await staffContactController.aggregation();
	res.send(response);
})

module.exports = router;