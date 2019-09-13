const router = require('express').Router();
const bloodgroupController = require('./../controller/bloodgroup');

router.post('/add', async (req, res) => {
	const response = await bloodgroupController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bloodgroupController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await bloodgroupController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await bloodgroupController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await bloodgroupController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;