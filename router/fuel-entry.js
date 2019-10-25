const router = require('express').Router();
const fuelEntryController = require('./../controller/fuel-entry');

router.post('/add', async (req, res) => {
	const response = await fuelEntryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await fuelEntryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await fuelEntryController.fetchdata(req.query.id);
	res.send(response);
})

router.get('/fetchOpenKMSbyVehicle', async (req, res) => {

	const response = await fuelEntryController.fetchKMSbyVehicle(req.query.vehicleno);
	res.send(response);
})

router.get('/fetchFuelReportbyVehicle', async (req, res) => {

	const response = await fuelEntryController.fetchFuelReportbyVehicle(req.query.fuelVehicleNo);	
	res.send(response);
})

router.post('/fetchFuelReportbyDate', async (req, res) => {

	const response = await fuelEntryController.fetchFuelReportbyDate(req.body);	
	//console.log('fetchFuelReportbyDate',response);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await fuelEntryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await fuelEntryController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await fuelEntryController.aggregation();
	res.send(response);
})

module.exports = router;