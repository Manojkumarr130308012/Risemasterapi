const router = require('express').Router();
const expenseController = require('./../controller/vehicleExpenses');

router.post('/add', async (req, res) => {
	const response = await expenseController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await expenseController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await expenseController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await expenseController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await expenseController.update(req.query.id, req.body);
	res.send(response);
})


module.exports = router;