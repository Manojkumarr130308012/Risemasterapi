const router = require('express').Router();
const relationshipController = require('./../controller/relationship');

router.post('/add', async (req, res) => {
	const response = await relationshipController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await relationshipController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await relationshipController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await relationshipController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await relationshipController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;