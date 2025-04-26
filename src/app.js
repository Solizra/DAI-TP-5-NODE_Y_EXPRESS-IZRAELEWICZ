import express from 'express';
import { horaActual, fechaCompleta } from './time.js';

const app = express();

app.get('/', (req, res) => { 
    res.send('Bienvenido a mi servidor!');
});

app.get('/hora', (req, res) => {
    res.send(horaActual());
});

app.get('/fecha-completa', (req, res) => {
    res.send(fechaCompleta());
});

//EXTRA
app.use((req, res) => {
res.status(404).send('Datos incompletos <img src="https://http.cat/404" alt="404 Bad Request"/>');
});


export default app
