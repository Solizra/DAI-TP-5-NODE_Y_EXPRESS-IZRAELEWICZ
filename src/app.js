import express from "express";
import horaActual  from "./time.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => { 
    res.send('Bienvenido a mi servidor');
});

app.get('/hora', (req, res) => {
    res.send(horaActual());
  });
  
export default app
