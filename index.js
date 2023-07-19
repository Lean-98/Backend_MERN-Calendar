const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de Express
const app = express();

// DB
dbConnection();

// CORS
const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));

// Directorio Público
app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar Peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor Corriendo en el Puerto: ${ process.env.PORT }`);
});