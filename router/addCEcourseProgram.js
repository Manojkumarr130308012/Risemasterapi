const router = require('express').Router();
const addCECPController = require('./../controller/addCEcourseProgram');

router.post('/add', async (req, res) => {
	const response = await addCECPController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await addCECPController.fetch(); 
	res.send(response);
})
router.get('/fetchdata1', async (req, res) => {	
	const response = await addCECPController.fetchdata1(req.query.id);
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {	
	const response = await addCECPController.fetchdata(req.query.canId);
	res.send(response);
})
router.get('/fetchCECouPro', async (req, res) => {
	const response = await addCECPController.fetchCECouPro(req.query.canId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await addCECPController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await addCECPController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await addCECPController.aggregation();
	res.send(response);
})
module.exports = router;