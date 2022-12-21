import { sequelize } from "../config";
import { DataTypes } from 'sequelize';

const Pets = sequelize.define(
    'pets',
    {
        petId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            //allowNull: false
        },
        petName:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        petAge:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        petSex:{
            type: DataTypes.STRING(1),
            allowNull: false
        },
        petRace:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        petLatitude:{
            type: DataTypes.DECIMAL(8,6),
            allowNull: false
        },
        petLongitude:{
            type: DataTypes.DECIMAL(9,6),
            allowNull: false
        }
    },
    { timestamps: false }
);

await Pets.sync({ alter: true});

export const operations = {
    createPet: async function (pet){
        return await Pets.create({"petName": pet.name, "petAge": pet.age, "petSex": pet.sex, "petRace": pet.race})
    },
    findAllPets: async function(){
        return await Pets.findAll();
    },
    findPet: async function(petId){
        return await Pets.findByPk(petId);
    },
    updatePet: async function(petId){
        const Pets = await Pets.findByPk(petId);
        if (Pets){
            return await Pets.update(   
                {"petName": pet.name, "petAge": pet.age, "petSex": pet.sex, "petRace": pet.race},
                { where: { "petId": petId } }
            )
        } else {
            return null
        }
    },
    deletePet: async function(petId){
        return await Pets.destroy({
            where: { petId: petId}
        })
    }
}