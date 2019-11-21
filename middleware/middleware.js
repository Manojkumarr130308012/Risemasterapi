const server = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const config = require('./../config/config');
const basicDetailsController = require('./../controller/ce-basicdetails');


server.use('/', (req, res, next) => {
	//mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlParser: true});
	let  {protocol,host,port,name}= config.app.database;	
	mongoose.connect(`${protocol}${host}:
	${port}/${name}`, {useUnifiedTopology: true, useNewUrlParser:true});
	next();
});

server.use(cors({

   origin: 'http://localhost:4200'
    
}));



server.use(bodyParser.json());


module.exports = server;