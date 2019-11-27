const router = require('express').Router();
const userLoginController = require('./../controller/userLogin');

router.post('/login', async (req, res) => {

    const response= await userLoginController.login(req.body);
   // console.log(req.body);
    res.send(response);    
   
    
});

router.post('/validateToken', async (req, res) => {
    res.send(await userLoginController.validateToken(req.body));
   
});

module.exports = router;