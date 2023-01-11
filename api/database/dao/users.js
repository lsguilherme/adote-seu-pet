import Sequelize from "sequelize";
import Usuario from "../models/users.js";


await Usuario.sync({ alter: true });

export const operations = {
    create: async function (user) {
        return await Usuario.create({ "nome": user.nome, "email": user.email, "senha": user.senha });
    },
    findAllUsers: async function () {
        return await Usuario.findAll({
            attributes: [
                'id',
                'nome',
                [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });
    },
    findUser: async function (id) {
        return await Usuario.findByPk(id, {
            attributes: [
                'id',
                'nome',
                [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });
    },
    update: async function (id, user) {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            return await Usuario.update(
                { "nome": user.nome, "email": user.email, "senha": user.senha },
                { where: { "id": id } }
            )
        } else {
            return null
        }
    },
    delete: async function (id) {
        return await Usuario.destroy({
            where: { id: id }
        });
    },
    findUserByEmail: async function (email) {
        const usuario = await Usuario.findOne({ where: { email: email } });
        if (usuario) {
            return usuario
        } else {
            return false
        }
    }
}
