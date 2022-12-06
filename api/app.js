const express = require('express');
require('dotenv').config()

const routes = require('./routes/index')

const app = express()

app.use(routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server iniciado: http://localhost:${PORT}`))
