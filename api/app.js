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
            Documentação Swagger: <a href="${process.env.HTTP}://${process.env.URL_BASE}/doc"> ${process.env.HTTP}://${process.env.URL_BASE}/doc</a>
        </h1>
    `)
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


const PORT = process.env.PORT || 5011;

const LINK_URL = `URL Base: ${process.env.HTTP}://${process.env.URL_BASE}`
const LINK_DOC = `Documentação Swagger: ${process.env.HTTP}://${process.env.URL_BASE}/doc`
const LINHA = '='.repeat(LINK_DOC.length + 8)
const LINHA_FINA = '-'.repeat(LINK_DOC.length + 8)
app.listen(PORT, console.log(`
${LINHA}

    SERVIDOR INICIADO

${LINHA_FINA}

    ${LINK_URL}

    ${LINK_DOC}

${LINHA}
`))
