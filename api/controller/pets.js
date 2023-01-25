import { operations } from "../database/dao/pets.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
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

export const savePet = (request, response) => {
    const [, token] = request.headers.authorization.split(' ');

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

    operations.createPet({
        "nome": request.body.nome,
        "idade": request.body.idade,
        "sexo": request.body.sexo,
        "raca": request.body.raca,
        "imagem": request.body.imagem,
        "latitude": request.body.latitude,
        "longitude": request.body.longitude,
        "usuarioId": decoded.id
    }).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const updatePet = (request, response) => {
    operations.updatePet(request.params.id, {
        "nome": request.body.nome,
        "idade": request.body.idade,
        "sexo": request.body.sexo,
        "raca": request.body.raca,
        "imagem": request.body.imagem,
        "latitude": request.body.latitude,
        "longitude": request.body.longitude
    }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
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