import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json' assert { type: "json" };

import indexRoutes from "./routes/index.js";

const app = express()

app.use(express.json())

app.use(indexRoutes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 5011;

app.listen(PORT, console.log(`
==================================================

              SERVIDOR INICIADO

--------------------------------------------------

    URL Base: http://localhost:${PORT}

    Documentação: http://localhost:${PORT}/doc

==================================================
`))
