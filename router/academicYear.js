const router = require('express').Router();
const academicYearController = require('./../controller/academicYear');

router.post('/add', async (req, res) => {
	const response = await academicYearController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	const response = await academicYearController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await academicYearController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchdataactive', async (req, res) => {	
	const response = await academicYearController.fetchdataactive(req.query.status);
	res.send(response);
})
router.get('/fetchbybatch', async (req, res) => {	
	const response = await academicYearController.fetchbybatch(req.query.batch);
	res.send(response);
})

router.get('/fetchbycourseprogram', async (req, res) => {	
	const response = await academicYearController.fetchbycourseprogram(req.query.courseprogram);
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
router.get('/aggregation', async (req, res) =>{
	let response = await academicYearController.aggregation();
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	const response = await academicYearController.fetchbyIns(req.query.institution);
	res.send(response);
})
module.exports = router;