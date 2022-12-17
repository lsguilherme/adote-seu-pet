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
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    { timestamps: false }
);

export const operations = {
    create: async function (nome) {
        return await Usuario.create({ nome: nome });
    },
    findAllUsers: async function () {
        return await Usuario.findAll();
    },
    findUser: async function (id) {
        return await Usuario.findByPk(id);
    },
    update: async function (id, nome) {
        const user = await Usuario.findByPk(id);
        if (user) {
            return await Usuario.update(
                { "nome": nome },
                { where: { id: id } }
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
