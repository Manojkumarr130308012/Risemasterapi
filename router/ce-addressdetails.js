const router = require('express').Router();
const addressDetailsController = require('./../controller/ce-addressdetails');

router.post('/add', async (req, res) => {
	const response = await addressDetailsController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await addressDetailsController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await addressDetailsController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchaddress', async (req, res) => {
	const response = await addressDetailsController.fetchaddress(req.query.canId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await addressDetailsController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await addressDetailsController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async (req, res) =>{
	let response = await addressDetailsController.aggregation();
	res.send(response);
	
})


module.exports = router;