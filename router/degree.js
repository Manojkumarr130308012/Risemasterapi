const router = require('express').Router();
const degreeController = require('./../controller/degree');

router.post('/add', async (req, res) => {
	const response = await degreeController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	const response = await degreeController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await degreeController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await degreeController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await degreeController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await degreeController.aggregation();
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	const response = await degreeController.fetchbyIns(req.query.institution);
	res.send(response);
})
module.exports = router;