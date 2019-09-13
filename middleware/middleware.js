const server = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const config = require('./../config/config');
const userDesignationController = require('./../controller/userDesignation');


server.use('/', (req, res, next) => {
	//mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlParser: true});
	let  {protocol,host,port,name}= config.app.database;	
	mongoose.connect(`${protocol}${host}:
	${port}/${name}`, {useNewUrlParser:true});
	next();
});

server.use(cors({// Website you wish to allow to connect
   // 'Access-Control-Allow-Origin': '*'

   origin: 'http://localhost:4200'
    
    //origin: 'http://localhost:4200'
    // // Request methods you wish to allow
    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    
    // // Request headers you wish to allow
    // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding',
    
    
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // 'Access-Control-Allow-Credentials': true,
    
    // 'Access-Control-Max-Age': '1000',
    //origin: 'http://localhost:4200',
   // credentials: true
}));


// server.use(['/contact'], async (req, res, next) => {
// 	if(!req.headers.authorization){
// 		return res.send({
// 			status: 'error',
// 			msg: 'Invalid Token'
// 		})
// 	}

// 	await userController.validateToken(res, req.headers.authorization);

// 	next();
// })

server.use(bodyParser.json());


module.exports = server;