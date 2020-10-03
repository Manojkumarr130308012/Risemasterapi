const router = require('express').Router();
const exammasController = require('./../controller/exam_mas');

router.post('/add', async (req, res) => {
	const response = await exammasController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	const response = await exammasController.fetch();
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {	
	const response = await exammasController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchdataactive', async (req, res) => {	
	const response = await exammasController.fetchdataactive(req.query.status);
	res.send(response);
})
router.get('/fetchbybatch', async (req, res) => {	
	const response = await exammasController.fetchbybatch(req.query.batch);
	res.send(response);
})

router.get('/fetchbycourseprogram', async (req, res) => {	
	const response = await exammasController.fetchbycourseprogram(req.query.courseprogram);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await exammasController.delete(req.query.id);
	res.send(response);
})

router.put('/update', async (req, res) => {
	const response = await exammasController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await exammasController.aggregation();
	res.send(response);
})
router.get('/fetchbyIns', async (req, res) => {
	const response = await exammasController.fetchbyIns(req.query.institution);
	res.send(response);
})
module.exports = router;