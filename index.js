// Importar librerías
const express = require('express');
const knex = require('./db'); //Llamado de conf de db
const routes = require('./routes'); // llamado rutas 

const app = express(); // creamos una nueva instancia 
const port = 3000; // puerto de salida

app.use(express.json()); // configura tipo de dato json 
app.use('/api', routes); // configura la url base y rutas 

app.listen(port, () => {
    //luego de ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`);
});
