const router = require('express').Router();
const studentLoginController = require('./../controller/studentLogin');

router.post('/StuLogin', async (req, res) => {
   
    const response= await studentLoginController.StuLogin(req.body);
    //console.log(req.body);
     res.send(response);
});
router.post('/validateToken1', async (req, res) => {
    res.send(await studentLoginController.validateToken1(req.body));
   
});
module.exports = router;