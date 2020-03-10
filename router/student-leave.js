const router = require('express').Router();
const studentLeaveController = require('./../controller/student-leave');

router.post('/add', async (req, res) => {
	const response = await studentLeaveController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentLeaveController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentLeaveController.fetchdata(req.query.id);
	res.send(response);
})
 router.post('/fetchAttendenceEntryExist', async (req, res) => {
 	const response = await studentLeaveController.fetchAttendenceEntryExist(req.body);
 	res.send(response);
 })
 router.post('/fetchStudentAttendenceDetails', async (req, res) => {
	const response = await studentLeaveController.fetchStudentAttendenceDetails(req.body);
	res.send(response);
})

router.post('/fetchStudentAttendence', async (req, res) => {
	const response = await studentLeaveController.fetchStudentAttendence(req.body);
	res.send(response);	
})

router.post('/fetchAttendence', async (req, res) => {
	const response = await studentLeaveController.fetchAttendence(req.body);
	res.send(response);	
	//console.log(response);
})



router.delete('/delete', async (req, res) => {
	const response = await studentLeaveController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentLeaveController.update(req.query.id, req.body);
	//console.log(req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentLeaveController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentLeaveController.fetchbyId(req.query.studentId);
	res.send(response);
})


module.exports = router;