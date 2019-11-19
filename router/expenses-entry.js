const router = require('express').Router();
const expensesEntryController = require('./../controller/expenses-entry');

router.post('/add', async (req, res) => {
	const response = await expensesEntryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await expensesEntryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await expensesEntryController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyDate', async (req, res) => {
	const response = await expensesEntryController.fetchbyDate(req.query.date);
	console.log('res',response);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await expensesEntryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await expensesEntryController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await expensesEntryController.aggregation();
	res.send(response);
})



router.post('/fetchExpenseReportbyDate', async (req, res) => {

	const response = await expensesEntryController.fetchExpenseReportbyDate(req.body);	
	//console.log('fetchFuelReportbyDate',response);
	res.send(response);
})

router.get('/getExpenseReportbyVehicle', async (req, res) => {

	const response = await expensesEntryController.getExpenseReportbyVehicle(req.query.vehicleNo);	
	res.send(response);
})

module.exports = router;