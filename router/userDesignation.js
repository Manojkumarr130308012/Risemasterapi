const express = require('express');
const route = express.Router();

const userDesignationController = require('./../controller/userDesignation')



route.post('/add', async (req, res) => {
	
	const response= await userDesignationController.addNewDesignation(req.body);
	res.send(response);	
});


route.get('/fetch', async (req, res) => {
	const response = await userDesignationController.fetch();
	res.send(response);
})

route.get('/fetchdata', async (req, res) => {
	const response = await userDesignationController.fetchDesignation(req.query.id);
	res.send(response);
})

route.put('/update', async (req, res) => {
	const response= await userDesignationController.updateDesignation(req.query.id,req.body);
	res.send(response);

});


route.delete('/delete', async (req, res) => {
	const response = await userDesignationController.delete(req.query.id);
	res.send(response);
})



module.exports = route;