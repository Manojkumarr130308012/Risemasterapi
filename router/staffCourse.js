const router = require('express').Router();
const staffCourseController = require('./../controller/staffCourse');

router.post('/add', async (req, res) => {
	const response = await staffCourseController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await staffCourseController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await staffCourseController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchcourse', async (req, res) => {
	const response = await staffCourseController.fetchcourse(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await staffCourseController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await staffCourseController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;