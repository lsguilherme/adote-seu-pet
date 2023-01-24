import Sequelize from "sequelize";
import Pets from "../models/pets.js";
import Usuario from "../models/users.js";

// Sincronizar somente no ambiente de desenvolvimento
await Usuario.sync({ force: true });

export const operations = {
    create: async function (user) {
        return await Usuario.create({ "nome": user.nome, "email": user.email, "senha": user.senha });
    },

    findAllUsers: async function () {
        return await Usuario.findAll({
            model: Usuario,
            attributes: [
                'id',
                'nome',
                [Sequelize.fn('date_format', Sequelize.col('usuarios.createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('usuarios.updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });
    },

    findAllUsersPets: async function () {
        return await Usuario.findAll({
            model: Usuario,
            attributes: [
                'id',
                'nome',
                [Sequelize.fn('date_format', Sequelize.col('usuarios.createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('usuarios.updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ],
            include: {
                model: Pets,
                attributes: [
                    "id",
                    "nome",
                    "idade",
                    "sexo",
                    "raca",
                    "imagem",
                    "latitude",
                    "longitude",
                    [Sequelize.fn('date_format', Sequelize.col('pets.createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                    [Sequelize.fn('date_format', Sequelize.col('pets.updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
                ]

            }
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

    findUserPets: async function (id) {
        return await Usuario.findByPk(id, {
            model: Usuario,
            attributes: [
                'id',
                'nome',
                [Sequelize.fn('date_format', Sequelize.col('usuarios.createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('usuarios.updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ],
            include: {
                model: Pets,
                attributes: [
                    "id",
                    "nome",
                    "idade",
                    "sexo",
                    "raca",
                    "imagem",
                    "latitude",
                    "longitude",
                    [Sequelize.fn('date_format', Sequelize.col('pets.createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                    [Sequelize.fn('date_format', Sequelize.col('pets.updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
                ]

            }
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
