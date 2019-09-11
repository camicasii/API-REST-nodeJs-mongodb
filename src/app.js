const express = require('express');
const bodyParsers = require('body-parser');
const morgan = require('morgan');

//importando modulos personales
const db = require('./dbmongo');
const usersRouters = require('./routes/users');

const app = express();

//settings
app.set('port',process.env.PORT || 4001);
//middleware
//app.use(express.json())

app.use(bodyParsers.json())
app.use(morgan('dev'))


//routes
app.use('/users',usersRouters)






//start server
app.listen(app.get('port'),()=>console.log('server start in port: ', app.get('port')));