const router = require('express').Router();
const staffLoginController = require('./../controller/staffLogin');

router.post('/login', async (req, res) => {
    const response= await staffLoginController.login(req.body);
   // console.log(req.body);
    res.send(response);
   
});

router.get('/stafflogin', async (req, res) => {
    const response= await staffLoginController.login2(req.query.username,req.query.password);
   // console.log(req.body);
    res.send(response);

});

router.post('/validateToken', async (req, res) => {
    res.send(await staffLoginController.validateToken(req.body));
   
});

module.exports = router;