import { operations } from "../database/dao/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as OTPAuth from "otpauth";
import dotenv from 'dotenv';
dotenv.config();

export const login = (request, response) => {
    /* 
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Login do usuário'
    #swagger.description = '
        Rota para realizar o login do usuário,
        é necessário passar o email e a nova senha no body. O retorno é um json web token.
    '
    #swagger.responses[200] = {
        description: 'Usuário autenticado com sucesso!'
    }
    #swagger.responses[400] = {
        description: 'Erro na requisição!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'Usuário não emcontrado!'
    }
    */

    operations.findUserByEmail(request.body.email).then(results => {
        if (results) {
            bcrypt.compare(request.body.senha, results.senha, function (err, result) {
                if (result) {
                    var token = jwt.sign({ "id": results.dataValues.id }, process.env.PRIVATE_KEY, { expiresIn: 60 * 5 });
                    response.json({ "token": token })
                } else response.sendStatus(401)
            })
        }
        else response.sendStatus(404)
    })
}

export const gerarTOTP = (request, response) => {
    /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Gerar código TOTP'
    #swagger.parameters['TOTP'] = {
        in: 'body',
        required: true,
        type: 'string',
        schema: { "email": "string" }
    }
    */

    operations.findUserByEmail(request.body.email).then(results => {
        if (results) {
            let totp = new OTPAuth.TOTP({
                algorithm: "SHA256",
                digits: 6,
                period: 60,
                secret: OTPAuth.Secret.fromUTF8(request.body.email + process.env.PRIVATE_KEY)
            })

            response.json({ "totp": totp.generate() })
        } else {
            response.status(404).json({ "message": "Usuário não encontrado!" })
        }
    })
}

export const validarTOTP = (request, response) => {
    /*
    #swagger.tags = ['Autenticação']
    #swagger.summary = 'Validar código TOTP'
    #swagger.parameters['TOTP'] = {
        in: 'body',
        required: true,
        type: 'string',
        schema: {
          "email": "string",
          "totp": "string"
        }
    }
    */

    operations.findUserByEmail(request.body.email).then(results => {
        if (results) {
            let totp = new OTPAuth.TOTP({
                algorithm: "SHA256",
                digits: 6,
                period: 60,
                secret: OTPAuth.Secret.fromUTF8(request.body.email + process.env.PRIVATE_KEY)
            })

            let delta = totp.validate({
                token: request.body.totp,
                window: 1
            })

            if (delta == 0) {
                response.json({ "totp": "VALIDO" })
            } else if (delta < 0) {
                response.status(403).json({ "totp": "EXPIRADO" })
            } else {
                response.status(401).json({ "totp": "INVALIDO" })
            }
        } else {
            response.status(404).json({ "message": "Usuário não encontrado!" })
        }
    })
}