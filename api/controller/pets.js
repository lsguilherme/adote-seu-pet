import { operations } from "../database/dao/pets.js";

//List all pets
export const getPets = (request, response) => {
    operations.findAllPets().then(results => {
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

export const savePet = (request, response) => {
    operations.createPet({
        "nome": request.body.nome,
        "idade": request.body.idade,
        "sexo": request.body.sexo,
        "raca": request.body.raca,
        "imagem": request.body.imagem,
        "latitude": request.body.latitude,
        "longitude": request.body.longitude
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