import { operations } from "../database/dao/pets.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

//List all pets
export const getPets = (request, response) => {
    /*

    #swagger.tags = ['Pets']
    
    #swagger.summary = 'Buscar todos os pets'
    
    #swagger.description = '
        Rota para buscar todos os pets.
    '
    
    #swagger.responses[200] = {
        description: 'Pets obtidos com sucesso!'
    }
    #swagger.responses[404] = {
        description: 'Nenhum pet encontrado!'
    }

    */
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
     /* 
    
    #swagger.tags = ['Pets']
    
    #swagger.summary = 'Buscar pet por id'
    
    #swagger.description = '
        Rota para buscar o pet por id,
        é necessário passar o id do usuário na ULR.
    '
    
    #swagger.responses[200] = {
        description: 'Pet obtido com sucesso!'
    }
    #swagger.responses[404] = {
        description: 'Pet não encontrado!'
    }

    */
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
     /* 
    
    #swagger.tags = ['Pets']
    
    #swagger.summary = 'Salvar pet'
    
    #swagger.description = '
        Rota para salvar o pet,
        é necessário passar o nome, o email e a senha no body.
    '

    #swagger.responses[200] = {
        description: 'Pet salvo com sucesso!'
    }
    #swagger.responses[400] = {
        description: 'Erro na requisição!'
    }
    #swagger.responses[409] = {
        description: 'Pet já cadastrado!'
    }

    */
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
     /* 
    
    #swagger.tags = ['Pets']
    
    #swagger.summary = 'Alterar nome do pet'
    
    #swagger.description = '
        Rota para alterar o nome do pet,
        é necessário passar o id do usuário na ULR, o token no header e o novo nome no body.
    '

    #swagger.responses[200] = {
        description: 'Nome do pet alterado com sucesso!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'pet não encontrado!'
    }
    
    */
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
    /* 
    
    #swagger.tags = ['Pets']
    
    #swagger.summary = 'Deletar pet'
    
    #swagger.description = '
        Rota para deletar o pet,
        é necessário passar o id do pet na ULR e o token no header.
    '
    #swagger.responses[200] = {
        description: 'Pet deletado com sucesso!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'Pet não encontrado!'
    }

    */
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