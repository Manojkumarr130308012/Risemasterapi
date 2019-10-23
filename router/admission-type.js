const router = require('express').Router();
const admissionTypeController = require('./../controller/admission-type');

router.post('/add', async (req, res) => {
	const response = await admissionTypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await admissionTypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await admissionTypeController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await admissionTypeController.fetchbyIns(req.query.institution);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await admissionTypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await admissionTypeController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await admissionTypeController.aggregation();
	res.send(response);
})

module.exports = router;