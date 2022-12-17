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
        const usuario = await Usuario.create({ nome: nome });
        return usuario
    },
    findAllUsers: async function () {
        return await Usuario.findAll();
    }
}


