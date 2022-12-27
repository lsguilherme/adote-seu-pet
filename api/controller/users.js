import { operations } from "../database/dao/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

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
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.senha, salt);
    operations.create({ nome: request.body.nome, email: request.body.email, senha: hash }).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const update = (request, response) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.senha, salt);
    operations.update(request.params.id, { nome: request.body.nome, email: request.body.email, senha: hash }).then(results => {
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

export const login = (request, response) => {
    operations.findUserByEmail(request.body.email).then(results => {
        if (results) {
            bcrypt.compare(request.body.senha, results.senha, function (err, result) {
                if (result) {
                    var token = jwt.sign({ "id": results.dataValues.id }, process.env.PRIVATE_KEY, { expiresIn: 60 * 5 });
                    response.json({ "token": token })
                } else response.sendStatus(400)
            })
        }
        else response.sendStatus(404)
    })
}

