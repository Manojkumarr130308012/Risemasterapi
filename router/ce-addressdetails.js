const router = require('express').Router();
const addressDetailsController = require('./../controller/ce-addressdetails');

router.post('/add', async (req, res) => {
	const response = await addressDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await addressDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await addressDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await addressDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await addressDetailsController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;