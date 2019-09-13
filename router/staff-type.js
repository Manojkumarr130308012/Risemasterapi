const router = require('express').Router();
const staffTypeController = require('./../controller/staff-type');

router.post('/add', async (req, res) => {
	const response = await staffTypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await staffTypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await staffTypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffTypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffTypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;