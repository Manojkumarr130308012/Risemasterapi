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
router.get('/fetchtimestaffdata', async (req, res) => {
	const response = await timeTableController.fetchstaffperioddata(req.query.academicYear,req.query.staff,req.query.day);
	res.send(response);
})

router.get('/fetchStudentDetails', async (req, res) => {
	const response = await timeTableController.fetchStudentDetails(req.query.sectionId);
	res.send(response);
})


router.post('/fetchSubjectStaff', async (req, res) => {
	const response = await timeTableController.fetchSubjectStaff(req.body);
	res.send(response);
})

router.post('/fetchSubjectExist', async (req, res) => {
	const response = await timeTableController.filterSubExist(req.body);
	res.send(response);
})

router.post('/filterPeriodExist', async (req, res) => {
	const response = await timeTableController.filterPeriodSubject(req.body);
	res.send(response);
})


router.post('/fetchPeriodSubjectStaff', async (req, res) => {
	const response = await timeTableController.fetchPeriodSubjectStaff(req.body);
	res.send(response);
	//console.log(response);
})


router.delete('/delete', async (req, res) => {
	const response = await timeTableController.delete(req.query.id);
	//console.log(response);
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