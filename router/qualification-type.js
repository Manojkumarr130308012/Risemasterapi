const router = require('express').Router();
const qualificationTypeController = require('../controller/qualification-type');

router.post('/add', async (req, res) => {
	const response = await qualificationTypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await qualificationTypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await qualificationTypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await qualificationTypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await qualificationTypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;



