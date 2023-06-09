import Sequelize from "sequelize";
import Pets from "../models/pets.js";
import Usuario from "../models/users.js";
import PetsFavoritos from "../models/petFavoritos.js";

// Sincronizar somente no ambiente de desenvolvimento
await Pets.sync({ force: true });
await PetsFavoritos.sync({ force: true });

export const operations = {
    createPet: async function (pet) {
        return await Pets.create({
            "nome": pet.nome,
            "idade": pet.idade,
            "sexo": pet.sexo,
            "raca": pet.raca,
            "imagem": pet.imagem,
            "latitude": pet.latitude,
            "longitude": pet.longitude,
            "usuarioId": pet.usuarioId
        })
    },

    findAllPets: async function () {
        return await Pets.findAll({
            attributes: [
                "id",
                "nome",
                "idade",
                "sexo",
                "raca",
                "imagem",
                "latitude",
                "longitude",
                "usuarioId",
                [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });

    },

    findAllPetsUser: async function () {
        return await Pets.findAll({
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
            ],
            include: [
                { model: Usuario, attributes: ["id", "nome"] },
                { model: PetsFavoritos, attributes: ["usuarioId"] }

            ]
        });

    },

    findPet: async function (id) {
        return await Pets.findByPk(id, {
            attributes: [
                "id",
                "nome",
                "idade",
                "sexo",
                "raca",
                "imagem",
                "latitude",
                "longitude",
                "usuarioId",
                [Sequelize.fn('date_format', Sequelize.col('createdAt'), '%d/%m/%Y %H:%i:%s'), 'criacao'],
                [Sequelize.fn('date_format', Sequelize.col('updatedAt'), '%d/%m/%Y %H:%i:%s'), 'edicao']
            ]
        });
    },

    findPetUser: async function (id) {
        return await Pets.findByPk(id, {
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
            ],
            include: {
                model: Usuario,
                attributes: ["id", "nome"]

            }
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
    },

    findPetFavorito: async function (petId, usuarioId) {
        return await PetsFavoritos.findOne({ where: { petId: petId, usuarioId: usuarioId } });
    },

    findPetFavoritoByUser: async function (usuarioId) {
        return await Pets.findAll({
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
            ],
            include: [
                { model: Usuario, attributes: ["id", "nome"] },
                { model: PetsFavoritos, attributes: ["usuarioId"], where: { usuarioId: usuarioId } }
            ]
        });
    },

    favoritarPet: async function (pet) {
        return await PetsFavoritos.create({
            "petId": pet.petId,
            "usuarioId": pet.usuarioId
        })
    },

    deletePetFavorito: async function (petId, usuarioId) {
        return await PetsFavoritos.destroy({ where: { petId: petId, usuarioId: usuarioId } })
    }
}
