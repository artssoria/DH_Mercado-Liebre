// Importa el módulo Express
const express = require('express');
const path = require('path');

// Crea una nueva aplicación Express
const app = express();

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


const port = 3000;

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
