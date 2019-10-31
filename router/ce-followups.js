const router = require('express').Router();
const followupsController = require('./../controller/ce-followups');

router.post('/add', async (req, res) => {
	const response = await followupsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	// res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await followupsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await followupsController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchfollowups', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await followupsController.fetchfollowups(req.query.canId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await followupsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await followupsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await followupsController.aggregation();
	res.send(response);
	
})


module.exports = router;