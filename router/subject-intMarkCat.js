const router = require('express').Router();
const subjectIntMarkCatController = require('./../controller/subject-intMarkCat');
//intmarkcat - InternalMarkCategory

router.post('/add', async (req, res) => {
	const response = await subjectIntMarkCatController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectIntMarkCatController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectIntMarkCatController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectIntMarkCatController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectIntMarkCatController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectIntMarkCatController.aggregation();
	res.send(response);
})
router.get('/fetchByMarkDef', async (req, res) => {
	const response = await subjectIntMarkCatController.fetchByMarkDef(req.query.markDefinition);
	res.send(response);
})
module.exports = router;

