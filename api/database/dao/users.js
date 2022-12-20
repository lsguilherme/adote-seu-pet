import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';
import bcrypt from "bcrypt";

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
    { timestamps: false }
);

await Usuario.sync({ alter: true });

export const operations = {
    create: async function (user) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.senha, salt);
        return await Usuario.create({ "nome": user.nome, "email": user.email, "senha": hash });
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
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(user.senha, salt);
            return await Usuario.update(
                { "nome": user.nome, "email": user.email, "senha": hash },
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
    }
}
