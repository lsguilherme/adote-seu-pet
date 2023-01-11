import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';
import Usuario from "./users.js";

const Pets = sequelize.define(
    'pets',
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
        idade: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        sexo: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        raca: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imagem: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        latitude: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        longitude: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

Pets.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    as: 'usuario'
});

export default Pets;