const router = require('express').Router();
const studentAttendenceController = require('./../controller/student-attendenceEntry');

router.post('/add', async (req, res) => {
	const response = await studentAttendenceController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentAttendenceController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentAttendenceController.fetchdata(req.query.id);
	res.send(response);
})
 router.post('/fetchAttendenceEntryExist', async (req, res) => {
 	const response = await studentAttendenceController.fetchAttendenceEntryExist(req.body);
 	res.send(response);
 })
 router.get('/fetchAttendenceEntryExist1', async (req, res) => {
	const response = await studentAttendenceController.fetchAttendenceEntryExist1(req.query.attendenceDate,req.query.period,req.query.subjectId);
	res.send(response);
})
 router.post('/fetchStudentAttendenceDetails', async (req, res) => {
	const response = await studentAttendenceController.fetchStudentAttendenceDetails(req.body);
	res.send(response);
})

router.post('/fetchStudentAttendence', async (req, res) => {
	const response = await studentAttendenceController.fetchStudentAttendence(req.body);
	res.send(response);	
})

router.post('/fetchAttendence', async (req, res) => {
	const response = await studentAttendenceController.fetchAttendence(req.body);
	res.send(response);	
	//console.log(response);
})



router.delete('/delete', async (req, res) => {
	const response = await studentAttendenceController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentAttendenceController.update(req.query.id, req.body);
	//console.log(req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentAttendenceController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentAttendenceController.fetchbyId(req.query.stuId);
	res.send(response);
})


module.exports = router;