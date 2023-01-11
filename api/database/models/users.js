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
    }
);

export default Usuario;