import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json' assert { type: "json" };

import indexRoutes from "./routes/index.js";

const app = express()

app.use(express.json())

app.use(indexRoutes);

app.get('/', (req, res) => {
    res.send(`
        <h1 style='display: flex; justify-content: center; font-family: sans-serif; margin-top: 5vh'>
            Documentação Swagger: <a href="https://${process.env.URL_BASE}/doc"> https://${process.env.URL_BASE}/doc</a>
        </h1>
    `)
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


const PORT = process.env.PORT || 5011;

app.listen(PORT, console.log(`
====================================================================

    SERVIDOR INICIADO

--------------------------------------------------------------------

    URL Base: https://${process.env.URL_BASE}

    Documentação Swagger: https://${process.env.URL_BASE}/doc

====================================================================
`))
