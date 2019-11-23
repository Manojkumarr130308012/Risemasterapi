const router = require('express').Router();
const batchController = require('./../controller/batch');

router.post('/add', async (req, res) => {
	const response = await batchController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await batchController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await batchController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchByCour', async (req, res) => {
	const response = await batchController.fetchByCour(req.query.courseprogram);
	res.send(response); 
})
router.delete('/delete', async (req, res) => {
	const response = await batchController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await batchController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await batchController.aggregation();
	res.send(response);
})

module.exports = router;