const router = require('express').Router();
const convertController = require('./../controller/ce-converttostudent');

router.post('/add', async (req, res) => {
	const response = await convertController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await convertController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await convertController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchconvert', async (req, res) => {
	const response = await convertController.fetchconvert(req.query.canId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await convertController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await convertController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await convertController.aggregation();
	res.send(response);
	
})

module.exports = router;