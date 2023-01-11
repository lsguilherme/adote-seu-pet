import { sequelize } from "../config.js";
import { DataTypes } from 'sequelize';

const Pets = sequelize.define(
    'pets',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            //allowNull: false
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        sex:{
            type: DataTypes.STRING(1),
            allowNull: false
        },
        race:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        latitude:{
            type: DataTypes.DECIMAL(8,6),
            allowNull: false
        },
        longitude:{
            type: DataTypes.DECIMAL(9,6),
            allowNull: false
        }
    },
    { timestamps: false }
);

await Pets.sync({ alter: true});

export const operations = {
    createPet: async function (pet){
        return await Pets.create({"name": pet.name, "age": pet.age, "sex": pet.sex, "race": pet.race, "latitude":pet.latitude, "longitude":pet.longitude})
    },
    findAllPets: async function(){
        return await Pets.findAll();
    },
    findPet: async function(id){
        return await Pets.findByPk(id);
    },
    updatePet: async function(id, pet){
        console.log(id, pet)
        const petObject = await Pets.findByPk(id);
        if (petObject && petObject.id){
            return await Pets.update(   
                {"name": pet.name, "age": pet.age, "sex": pet.sex, "race": pet.race},
                { where: { "id": id } }
            )
        } else {
            return null
        }
    },
    deletePet: async function(id){
        return await Pets.destroy({
            where: { petId: id}
        })
    }
}