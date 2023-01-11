import { operations } from "../database/dao/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const getUsers = (request, response) => {
    /*

    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Buscar todos os usuários'
    
    #swagger.description = '
        Rota para buscar todos os usuários.
    '
    
    #swagger.responses[200] = {
        description: 'Usuários obtidos com sucesso!'
    }
    #swagger.responses[404] = {
        description: 'Nenhum usuário encontrado!'
    }

    */

    operations.findAllUsers().then(results => {
        if (results.length > 0) response.send(results)
        else response.sendStatus(404)
    })
}

export const getUser = (request, response) => {
    /* 
    
    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Buscar usuário por id'
    
    #swagger.description = '
        Rota para buscar o usuário por id,
        é necessário passar o id do usuário na ULR.
    '
    
    #swagger.responses[200] = {
        description: 'Usuário obtido com sucesso!'
    }
    #swagger.responses[404] = {
        description: 'Usuário não encontrado!'
    }

    */

    operations.findUser(request.params.id).then(results => {
        if (results) response.send(results)
        else response.sendStatus(404)
    })
}

export const save = (request, response) => {
    /* 
    
    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Salvar usuário'
    
    #swagger.description = '
        Rota para salvar o usuário,
        é necessário passar o nome, o email e a senha no body.
    '

    #swagger.responses[200] = {
        description: 'Usuário salvo com sucesso!'
    }
    #swagger.responses[400] = {
        description: 'Erro na requisição!'
    }
    #swagger.responses[409] = {
        description: 'Usuário já cadastrado!'
    }

    */

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
    /* 
    
    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Alterar nome do usuário'
    
    #swagger.description = '
        Rota para alterar o nome do usuário,
        é necessário passar o id do usuário na ULR, o token no header e o novo nome no body.
    '

    #swagger.responses[200] = {
        description: 'Nome do usuário alterado com sucesso!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'Usuário não encontrado!'
    }
    
    */

    operations.update(request.params.id, { nome: request.body.nome }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const remove = (request, response) => {
    /* 
    
    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Deletar usuário'
    
    #swagger.description = '
        Rota para deletar o usuário,
        é necessário passar o id do usuário na ULR e o token no header.
    '
    #swagger.responses[200] = {
        description: 'Usuário deletado com sucesso!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'Usuário não encontrado!'
    }

    */

    operations.delete(request.params.id).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

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

export const updateEmail = (request, response) => {
    /* 
    
    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Alterar email do usuário'
    
    #swagger.description = '
        Rota para alterar o email do usuário,
        é necessário passar o id do usuário na ULR, o token no header e o novo email no body.
    '

    #swagger.responses[200] = {
        description: 'Email do usuário alterado com sucesso!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'Usuário não encontrado!'
    }
    
    */

    operations.update(request.params.id, { email: request.body.email }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

export const updateSenha = (request, response) => {
    /* 

    #swagger.tags = ['Usuários']
    
    #swagger.summary = 'Alterar senha do usuário'
    
    #swagger.description = '
        Rota para alterar a senha do usuário,
        é necessário passar o id do usuário na ULR, o token no header e a nova senha no body.
    '

    #swagger.responses[200] = {
        description: 'Senha do usuário alterada com sucesso!'
    }
    #swagger.responses[401] = {
        description: 'Usuário não autorizado!'
    }
    #swagger.responses[404] = {
        description: 'Usuário não encontrado!'
    }
    
    */

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.senha, salt);
    operations.update(request.params.id, { senha: hash }).then(results => {
        if (results) response.sendStatus(200)
        else response.sendStatus(404)
    })
}

