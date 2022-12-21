import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';

const Usuario = sequelize.define(
    'usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    },
    { timestamps: false }
);

await Usuario.sync({ alter: true });

export const operations = {
    create: async function (user) {
        return await Usuario.create({ "nome": user.nome, "email": user.email, "senha": user.senha });
    },
    findAllUsers: async function () {
        return await Usuario.findAll();
    },
    findUser: async function (id) {
        return await Usuario.findByPk(id);
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
