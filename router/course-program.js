const router = require('express').Router();
const courseProgramController = require('./../controller/course-program');

router.post('/add', async (req, res) => {
	const response = await courseProgramController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseProgramController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await courseProgramController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await courseProgramController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await courseProgramController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await courseProgramController.aggregation();
	res.send(response);
})
module.exports = router;