import { operations } from "../database/dao/pets";

//List all pets
export const getPets = (request, response) =>{
    operations.findAllPets().then(results => {
        if(results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

//List one pet
export const getPet = (request, response) =>{
    operations.findPet(request.params.petId).then(results => {
        if(results) response.send(results)
        else response.sendStatus(404)
    })
}

export const savePet = (request, response) => {
    operations.createPet(request.body).then(results => {
        if(results) response.send(results)
        else response.sendStatus(404)
    })
}

export const updatePet = (request, response) => {
    operations.update(request.params.petId,request.body).then(results => {
        if(results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const removePet = (request, response) => {
    operations.deletePet(request.params.petId).then(results =>{
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}