import { operations } from "../database/dao/pets.js";
import jwt from "jsonwebtoken";
import amqplib from 'amqplib';
import dotenv from "dotenv";
dotenv.config();

//List all pets
export const getPets = (request, response) => {
    operations.findAllPets().then(results => {
        if (results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

export const getPetsUser = (request, response) => {
    operations.findAllPetsUser().then(results => {
        if (results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

//List one pet
export const getPet = (request, response) => {
    operations.findPet(request.params.id).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const getPetUser = (request, response) => {
    operations.findPetUser(request.params.id).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const salvarFotoPet = async (request, response) => {
    if (request.file && request.file.buffer) {
        (async () => {
            const queueAPI = 'tasksAPI';
            const queueConverter = 'tasksConverter';
            const conn = await amqplib.connect('amqp://localhost:5672');

            conn.on('error', function (err) { /*console.error('RabbitMQ Connection ' + err)*/ })

            const ch1 = await conn.createChannel();
            const ch2 = await conn.createChannel();
            await ch2.assertQueue(queueAPI);

            ch1.sendToQueue(queueConverter, Buffer.from(JSON.stringify(request.file)));

            let retorno = {}

            await ch1.consume(queueAPI, (msg) => {
                if (msg !== null) {
                    retorno = JSON.parse(msg.content);
                    !retorno?.erro ? response.send(retorno) : response.status(500).send(retorno);
                    ch1.ack(msg);
                } else {
                    console.log('Consumer cancelled by server');
                }
            });
        })();
    }
};

export const savePet = (request, response) => {
    /* 
    #swagger.tags = ['Pets']
    #swagger.summary = 'Salvar pet'
    #swagger.description = 'Rota para salvar pet'
    #swagger.parameters['authorization'] = { in: 'header', required: true, schema: 'Bearer Token' }
    #swagger.consumes = ['multipart/form-data']
    #swagger.parameters['nome'] = { in: 'formData', type: 'string' }
    #swagger.parameters['idade'] = { in: 'formData', type: 'integer' }
    #swagger.parameters['sexo'] = { in: 'formData', type: 'string' }
    #swagger.parameters['raca'] = { in: 'formData', type: 'string' }
    #swagger.parameters['latitude'] = { in: 'formData', type: 'string' }
    #swagger.parameters['longitude'] = { in: 'formData', type: 'string' }
    #swagger.parameters['imagem'] = { in: 'formData', type: 'file' }
    */
    const [, token] = request.headers.authorization.split(' ');

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

    operations.createPet({
        "nome": request.body.nome,
        "idade": request.body.idade,
        "sexo": request.body.sexo,
        "raca": request.body.raca,
        "imagem": 'null',
        "latitude": request.body.latitude,
        "longitude": request.body.longitude,
        "usuarioId": decoded.id
    }).then(async results => {
        if (results) {
            if (request.file && request.file.buffer) {
                (async () => {
                    const queueAPI = 'tasksAPI';
                    const queueConverter = 'tasksConverter';
                    const conn = await amqplib.connect('amqp://localhost:5672');

                    conn.on('error', function (err) { /*console.error('RabbitMQ Connection ' + err)*/ })

                    const ch1 = await conn.createChannel();
                    const ch2 = await conn.createChannel();
                    await ch2.assertQueue(queueAPI);

                    request.file['id'] = results.id
                    ch1.sendToQueue(queueConverter, Buffer.from(JSON.stringify(request.file)));

                    let retorno = {}

                    await ch1.consume(queueAPI, (msg) => {
                        if (msg !== null) {
                            retorno = JSON.parse(msg.content);
                            if (!retorno?.erro) {
                                operations.updatePet(results.id, {
                                    "imagem": retorno.url
                                });
                            }
                            ch1.ack(msg);
                        } else {
                            console.log('Consumer cancelled by server');
                        }
                    }).then(() => {
                        if (!retorno?.erro) {
                            results.imagem = retorno.url
                            response.send(results)
                        } else response.status(500).send(retorno)
                    }).catch(err => response.status(500).send(err));
                })();
            } else response.sendStatus(200)
        } else response.sendStatus(404)
    })
}

export const updatePet = (request, response) => {
    /* 
    #swagger.tags = ['Pets']
    #swagger.summary = 'Atualizar pet'
    #swagger.description = 'Rota para salvar pet'
    #swagger.parameters['authorization'] = { in: 'header', required: true, schema: 'Bearer Token' }
    #swagger.consumes = ['multipart/form-data']
    #swagger.parameters['nome'] = { in: 'formData', type: 'string' }
    #swagger.parameters['idade'] = { in: 'formData', type: 'integer' }
    #swagger.parameters['sexo'] = { in: 'formData', type: 'string' }
    #swagger.parameters['raca'] = { in: 'formData', type: 'string' }
    #swagger.parameters['latitude'] = { in: 'formData', type: 'string' }
    #swagger.parameters['longitude'] = { in: 'formData', type: 'string' }
    #swagger.parameters['imagem'] = { in: 'formData', type: 'file' }
    */
    operations.updatePet(request.params.id, {
        "nome": request.body.nome,
        "idade": request.body.idade,
        "sexo": request.body.sexo,
        "raca": request.body.raca,
        "latitude": request.body.latitude,
        "longitude": request.body.longitude
    }).then(results => {
        if (results) {
            if (request.file && request.file.buffer) {
                (async () => {
                    const queueAPI = 'tasksAPI';
                    const queueConverter = 'tasksConverter';
                    const conn = await amqplib.connect('amqp://localhost:5672');

                    conn.on('error', function (err) { /*console.error('RabbitMQ Connection ' + err)*/ })

                    const ch1 = await conn.createChannel();
                    const ch2 = await conn.createChannel();
                    await ch2.assertQueue(queueAPI);

                    request.file['id'] = request.params.id
                    ch1.sendToQueue(queueConverter, Buffer.from(JSON.stringify(request.file)));

                    let retorno = {}

                    await ch1.consume(queueAPI, (msg) => {
                        if (msg !== null) {
                            retorno = JSON.parse(msg.content);
                            if (!retorno?.erro) {
                                operations.updatePet(request.params.id, {
                                    "imagem": retorno.url
                                });
                            };
                            ch1.ack(msg);
                        } else {
                            console.log('Consumer cancelled by server');
                        }
                    }).then(() => {
                        if (!retorno?.erro) {
                            response.sendStatus(200)
                        } else response.status(500).send(retorno)
                    }).catch(err => response.status(500).send(err));
                })();
            } else response.sendStatus(200)
        } else response.sendStatus(404)
    })
}

export const removePet = (request, response) => {
    operations.deletePet(request.params.id).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const favoritarPet = (request, response) => {
    /* 
    #swagger.tags = ['Pets']
    #swagger.summary = 'Favoritar pet'
    #swagger.description = 'Rota para favoritar o pet, é necessário passar o id no pet na URL.'
    #swagger.parameters['id'] = { in: 'path', required: true, type: 'integer' }
    #swagger.responses[200] = { description: 'Pet favoritado com sucesso!' }
    */

    const [, token] = request.headers.authorization.split(' ');

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

    operations.findPetFavorito(request.params.id, decoded.id).then(results => {
        if (results) {
            operations.deletePetFavorito(request.params.id, decoded.id).then(results => {
                if (results) response.sendStatus(200)
                else response.sendStatus(404)
            })
        } else {
            operations.favoritarPet({
                "petId": Number(request.params.id),
                "usuarioId": decoded.id
            }).then(results => {
                if (results) response.send(results)
                else response.sendStatus(404)
            })
        }
    })

}

export const buscarPetsFavoritados = (request, response) => {
    /* 
    #swagger.tags = ['Pets']
    #swagger.summary = 'Pets favoritados'
    #swagger.description = 'Rota para buscar os pets favoritos do usuário.'
    */

    const [, token] = request.headers.authorization.split(' ');

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

    operations.findPetFavoritoByUser(decoded.id).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}