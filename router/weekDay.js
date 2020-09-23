const router = require('express').Router();
const weekDayController = require('./../controller/weekDay');

router.post('/add', async (req, res) => {
	const response = await weekDayController.add(req.body);
	res.send(response);
})
router.get('/fetchweekdays', async (req, res) => {
	const response = await weekDayController.fetchweekdays();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await weekDayController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await weekDayController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await weekDayController.update(req.query.id, req.body);
	res.send(response);
})

router.get('/fetchattendenceDayId', async (req, res) => {
	const response = await weekDayController.fetchattendenceDayId(req.query.day);	
	res.send(response);
	})
	router.get('/afetchattendenceDayId', async (req, res) => {
		const response = await weekDayController.fetchattendenceDayId1(req.query.day);	
		res.send(response);
		})

module.exports = router;