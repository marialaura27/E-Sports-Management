const cors = require('cors');
const express = require('express');
const jogadoresRoutes = require('./routes/jogadores.routes');
const timesRoutes = require('./routes/times.routes');


const app = express();

app.use(express.json());

app.use(cors());

app.use('/jogadores', jogadoresRoutes);

app.use('/times', timesRoutes)

module.exports = app;