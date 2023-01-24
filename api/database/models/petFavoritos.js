import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';
import Usuario from "./users.js";
import Pets from "./pets.js";

const PetsFavoritos = sequelize.define(
    'petsFavoritos',
    {
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        petId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    }
);

Usuario.hasMany(PetsFavoritos);
PetsFavoritos.belongsTo(Usuario, {
    foreignKey: "usuarioId"
});

Pets.hasMany(PetsFavoritos);
PetsFavoritos.belongsTo(Pets, {
    foreignKey: "petId"
});

export default PetsFavoritos;