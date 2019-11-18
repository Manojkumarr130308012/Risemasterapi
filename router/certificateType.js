const router = require('express').Router();
const certificateTypeController = require('./../controller/certificateType');

router.post('/add', async (req, res) => {
	const response = await certificateTypeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	
	const response = await certificateTypeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	
	const response = await certificateTypeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await certificateTypeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await certificateTypeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;