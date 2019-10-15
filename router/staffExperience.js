const router = require('express').Router();
const staffExperienceController = require('./../controller/staffExperience');

router.post('/add', async (req, res) => {
	const response = await staffExperienceController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffExperienceController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffExperienceController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchexperience', async (req, res) => {
	const response = await staffExperienceController.fetchexperience(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffExperienceController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffExperienceController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;