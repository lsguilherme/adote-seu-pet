import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.BD_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: "-3:00",
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});