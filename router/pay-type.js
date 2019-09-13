const router = require('express').Router();
const payTypeController = require('./../controller/pay-type');

router.post('/add', async (req, res) => {
	const response = await payTypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await payTypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await payTypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await payTypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await payTypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;