import { operations } from "../database/dao/users.js";

export const getUsers = (request, response) => {
    operations.findAllUsers().then(results => {
        response.send(results)
    })
}

export const getUser = (request, response) => {
    operations.findUser(request.params.id).then(results => {
        response.send(results)
    })
}

export const save = (request, response) => {
    operations.create(request.body.nome).then(results => {
        response.send(results)
    })
}

export const remove = (request, response) => {
    operations.delete(request.params.id).then(results => {
        if (results) response.sendStatus(200)
        response.sendStatus(400)
    })
}
