const router = require('express').Router();
const staffEducationController = require('./../controller/staffEducation');

router.post('/add', async (req, res) => {
	const response = await staffEducationController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffEducationController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffEducationController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetcheducation', async (req, res) => {
	const response = await staffEducationController.fetcheducation(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffEducationController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffEducationController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;