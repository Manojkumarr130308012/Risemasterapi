const router = require('express').Router();
const religionController = require('./../controller/religion');

router.post('/add', async (req, res) => {
	const response = await religionController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await religionController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await religionController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await religionController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await religionController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;