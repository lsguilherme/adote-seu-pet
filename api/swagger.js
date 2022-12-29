import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();

const doc = {
    info: {
        version: '1.0.0',
        title: 'Adote Seu Pet',
        description: `API Node.js documentada com Swagger\nhttp://localhost:${process.env.PORT}`,
    },
    host: `localhost:${process.env.PORT}`,
    basePath: '/',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);