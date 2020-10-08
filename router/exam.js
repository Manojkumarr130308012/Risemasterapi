const router = require('express').Router();
const examController = require('./../controller/exam');

router.post('/add', async (req, res) => {
	const response = await examController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await examController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await examController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await examController.fetchbyIns(req.query.examtype);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await examController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await examController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/fetchdataactive', async (req, res) => {	
	const response = await academicYearController.fetchdataactive(req.query.status);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await examController.aggregation();
	res.send(response);
	
})

module.exports = router;