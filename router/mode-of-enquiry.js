const router = require('express').Router();
const modeOfEnquiryController = require('./../controller/mode-of-enquiry');

router.post('/add', async (req, res) => {
	const response = await modeOfEnquiryController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await modeOfEnquiryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await modeOfEnquiryController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await modeOfEnquiryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await modeOfEnquiryController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;