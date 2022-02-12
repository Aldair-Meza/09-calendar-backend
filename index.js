const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();



// crear servidor exoppress

const app = express();

//Base de daros

dbConnection();

//Cors
app.use(cors());

//Directorio publico

app.use( express.static('public'));

//Lectura y parceo del body
app.use(express.json());


//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
//TODO CRUD:

//escuchar peticiones

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)

  
})