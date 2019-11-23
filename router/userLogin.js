const router = require('express').Router();
const userLoginController = require('./../controller/userLogin');

router.post('/login', async (req, res) => {
    res.send(await userLoginController.login(req.body));
});

module.exports = router;