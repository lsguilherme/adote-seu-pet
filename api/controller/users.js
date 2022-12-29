import { operations } from "../database/dao/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const getUsers = (request, response) => {
    // #swagger.tags = ['Usuários']

    operations.findAllUsers().then(results => {
        if (results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

export const getUser = (request, response) => {
    // #swagger.tags = ['Usuários']

    operations.findUser(request.params.id).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const save = (request, response) => {
    // #swagger.tags = ['Usuários']

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.senha, salt);
    operations.findUserByEmail(request.body.email).then(results => {
        if (!results) {
            operations.create({ nome: request.body.nome, email: request.body.email, senha: hash }).then(results => {
                if (results) response.send(results)
                else response.sendStatus(400)
            })
        } else {
            response.status(409).json({
                message: 'Usuário já cadastrado!'
            })
        }
    });
    
}

export const update = (request, response) => {
    // #swagger.tags = ['Usuários']

    operations.update(request.params.id, { nome: request.body.nome }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const remove = (request, response) => {
    // #swagger.tags = ['Usuários']

    operations.delete(request.params.id).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const login = (request, response) => {
    // #swagger.tags = ['Autenticação']

    operations.findUserByEmail(request.body.email).then(results => {
        if (results) {
            bcrypt.compare(request.body.senha, results.senha, function (err, result) {
                if (result) {
                    var token = jwt.sign({ "id": results.dataValues.id }, process.env.PRIVATE_KEY, { expiresIn: 60 * 5 });
                    response.json({ "token": token })
                } else response.sendStatus(401)
            })
        }
        else response.sendStatus(400)
    })
}

export const updateEmail = (request, response) => {
    // #swagger.tags = ['Usuários']

    operations.update(request.params.id, { email: request.body.email }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const updateSenha = (request, response) => {
    // #swagger.tags = ['Usuários']

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.senha, salt);
    operations.update(request.params.id, { senha: hash }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

