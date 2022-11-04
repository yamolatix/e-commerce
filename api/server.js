const express = require('express'); // Requiero Express para iniciar las rutas 
require("dotenv").config(); //Requiero el .env

// Middelwares
const volleyball = require('volleyball') // Depura solicitudes y respuestas asincrónicas
const cors = require('cors'); // Mecanismo de seguridad, ya que el recurso está alojado en otro origen

const db = require("./db"); // Requiero la db
const models = require("./models"); // Requiero a mis modelos por única vez  

const routes = require('./routes'); // Importo controllers

const app = express(); // Inicializo Express

// Ejecuto Middelwares
app.use(express.json());
app.use(volleyball)
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    header: 'Origin, X-Requested-With, Content-Type, Accept'
}))

app.use('/api', routes); // Inicializo rutas

// El Middleware para manejo de errores posee un parámetro extra, en este caso lo llamo err
// Este último Middleware detecta los errores y los coloca en dicho parámetro
app.use((err, req, res) => {
    res.status(500).send(err.message)
});

const PORT = 3001 // Asigno número del puerto

// Conecto servidor
db.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });