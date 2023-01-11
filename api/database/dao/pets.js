import Sequelize from "sequelize";
import Pets from "../models/pets.js";

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
                [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
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
                [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
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