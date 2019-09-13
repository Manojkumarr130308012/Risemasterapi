const router = require('express').Router();
const departmentController = require('./../controller/department');

router.post('/add', async (req, res) => {
	const response = await departmentController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await departmentController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await departmentController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await departmentController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await departmentController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await departmentController.aggregation();
	res.send(response);
})

module.exports = router;