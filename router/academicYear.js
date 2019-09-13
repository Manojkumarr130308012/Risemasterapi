const router = require('express').Router();
const academicYearController = require('./../controller/academicYear');

router.post('/add', async (req, res) => {
	const response = await academicYearController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await academicYearController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await academicYearController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await academicYearController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await academicYearController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;