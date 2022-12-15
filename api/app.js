import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

import indexRoutes from "./routes/index.js"

const app = express()

app.use(express.json())

app.use(indexRoutes)

const PORT = process.env.PORT || 5011;

app.listen(PORT, console.log(`Server iniciado: http://localhost:${PORT}`))
