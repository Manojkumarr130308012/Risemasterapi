const router = require('express').Router();
const studentCertificateController = require('./../controller/student-certificate');

router.post('/add', async (req, res) => {
	const response = await studentCertificateController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await studentCertificateController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await studentCertificateController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchcontact', async (req, res) => {
	const response = await studentCertificateController.fetchcontact(req.query.stuId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await studentCertificateController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await studentCertificateController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await studentCertificateController.aggregation();
	res.send(response);
})
router.get('/fetchbyId', async (req, res) => {
	const response = await studentCertificateController.fetchbyId(req.query.stuId);
	res.send(response);
})
module.exports = router;