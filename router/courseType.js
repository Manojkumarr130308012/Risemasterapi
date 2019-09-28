const router = require('express').Router();
const courseTypeController = require('./../controller/courseType');

router.post('/add', async (req, res) => {
	const response = await courseTypeController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseTypeController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await courseTypeController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await courseTypeController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await courseTypeController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await courseTypeController.aggregation();
	res.send(response);	
})
router.get('/fetchbyQua', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseTypeController.fetchbyQua(req.query.qualificationType);
	res.send(response);
})
module.exports = router;