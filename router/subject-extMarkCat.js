const router = require('express').Router();
const subjectExtMarkCatController = require('./../controller/subject-extMarkCat');
//intmarkcat - InternalMarkCategory

router.post('/add', async (req, res) => {
	const response = await subjectExtMarkCatController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	const response = await subjectExtMarkCatController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await subjectExtMarkCatController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await subjectExtMarkCatController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await subjectExtMarkCatController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggregation', async function  (req, res) {
	let response = await subjectExtMarkCatController.aggregation();
	res.send(response);
})
router.get('/fetchByMarkDef', async (req, res) => {
	const response = await subjectExtMarkCatController.fetchByMarkDef(req.query.markDefinition);
	res.send(response);
})
module.exports = router;

