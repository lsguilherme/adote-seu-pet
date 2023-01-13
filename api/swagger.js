import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();

const doc = {
    info: {
        version: '1.0.0',
        title: 'Adote Seu Pet',
        description: `API Node.js documentada com Swagger\n${process.env.HTTP}://${process.env.URL_BASE}`,
    },
    host: `${process.env.URL_BASE}`,
    basePath: '/',
    schemes: [`${process.env.HTTP}`],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);