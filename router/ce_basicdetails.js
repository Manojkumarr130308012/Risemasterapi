const router = require('express').Router();
const basicDetailsController = require('./../controller/ce_basicdetails');

router.post('/add', async (req, res) => {
	const response = await basicDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await basicDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await basicDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await basicDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await basicDetailsController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;