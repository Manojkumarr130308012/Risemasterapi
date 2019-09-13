const router = require('express').Router();
const staffRoleController = require('./../controller/staff-role');

router.post('/add', async (req, res) => {
	const response = await staffRoleController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await staffRoleController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await staffRoleController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffRoleController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffRoleController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;