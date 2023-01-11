import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';

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
        }
    }
);

await Pets.sync({ alter: true });

export const operations = {
    createPet: async function (pet) {
        return await Pets.create({
            "nome": pet.nome,
            "idade": pet.idade,
            "sexo": pet.sexo,
            "raca": pet.raca,
            "imagem": pet.imagem,
            "latitude": pet.latitude,
            "longitude": pet.longitude
        })
    },
    findAllPets: async function () {
        return await Pets.findAll({
            attributes: [
                "nome",
                "idade",
                "sexo",
                "raca",
                "imagem",
                "latitude",
                "longitude",
                [sequelize.fn('date_format', sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [sequelize.fn('date_format', sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });

    },
    findPet: async function (id) {
        return await Pets.findByPk(id, {
            attributes: [
                "nome",
                "idade",
                "sexo",
                "raca",
                "imagem",
                "latitude",
                "longitude",
                [sequelize.fn('date_format', sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [sequelize.fn('date_format', sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });
    },
    updatePet: async function (id, pet) {
        console.log(id, pet)
        const petObject = await Pets.findByPk(id);
        if (petObject) {
            return await Pets.update({
                "nome": pet.nome,
                "idade": pet.idade,
                "sexo": pet.sexo,
                "raca": pet.raca,
                "imagem": pet.imagem
            }, {
                where: { "id": id }
            })
        } else {
            return null
        }
    },
    deletePet: async function (id) {
        return await Pets.destroy({
            where: { "id": id }
        })
    }
}