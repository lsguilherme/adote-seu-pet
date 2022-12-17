import { operations } from "../database/dao/users.js";

export const getUsers = (request, response) => {
    operations.findAllUsers().then(results => {
        if (results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

export const getUser = (request, response) => {
    operations.findUser(request.params.id).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const save = (request, response) => {
    operations.create(request.body.nome).then(results => {
        if (results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

export const update = (request, response) => {
    operations.update(request.params.id, request.body.nome).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const remove = (request, response) => {
    operations.delete(request.params.id).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}
