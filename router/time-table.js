const router = require('express').Router();
const timeTableController = require('./../controller/time-table');

router.post('/add', async (req, res) => {
	const response = await timeTableController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await timeTableController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await timeTableController.fetchdata(req.query.id);
	res.send(response);
})

router.post('/fetchSubjectStaff', async (req, res) => {
	const response = await timeTableController.fetchSubjectStaff(req.body);
	res.send(response);
})



// router.get('/fetchbyIns', async (req, res) => {
// 	const response = await timeTableController.fetchbyIns(req.query.institution);
// 	res.send(response);
// })
// router.get('/fetchbySection', async (req, res) => {
// 	const response = await timeTableController.fetchbySection(req.query.section);
// 	res.send(response);
// })
// router.get('/fetchbySubject', async (req, res) => {
// 	const response = await timeTableController.fetchbySubject(req.query.subject);
// 	res.send(response);
// })
router.delete('/delete', async (req, res) => {
	const response = await timeTableController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await timeTableController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await timeTableController.aggregation();
	res.send(response);
})
module.exports = router;