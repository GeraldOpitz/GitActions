const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Node.js!');
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
    }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

setTimeout(() => {
    console.log('Shutting down server after 10 seconds');
    server.close(() => {
        console.log('Server closed');
    });
}, 10000); 

module.exports = app;
