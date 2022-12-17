import { operations } from "../database/dao/users.js";

export const getUsers = (request, response) => {
    operations.findAllUsers().then(results => {
        response.send(results)
    })
}

export const save = (request, response) => {
    operations.create(request.body.nome).then(results => {
        response.send(results)
    })
}
