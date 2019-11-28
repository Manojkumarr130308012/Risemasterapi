const router = require('express').Router();
const studentLoginController = require('./../controller/studentLogin');

router.post('/StuLogin', async (req, res) => {
    res.send(await studentLoginController.StuLogin(req.body));
    
});
router.post('/validateToken1', async (req, res) => {
    res.send(await studentLoginController.validateToken(req.body));
   
});
module.exports = router;