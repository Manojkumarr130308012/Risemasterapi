const router = require('express').Router();
const examtypeController = require('./../controller/examtype');

router.post('/add', async (req, res) => {
	const response = await examtypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await examtypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await examtypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await examtypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await examtypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;