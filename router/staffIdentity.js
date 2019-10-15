const router = require('express').Router();
const staffIdentityController = require('./../controller/staffIdentity');

router.post('/add', async (req, res) => {
	const response = await staffIdentityController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffIdentityController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffIdentityController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchidentity', async (req, res) => {
	const response = await staffIdentityController.fetchidentity(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffIdentityController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffIdentityController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;