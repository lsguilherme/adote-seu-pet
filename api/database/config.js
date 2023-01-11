import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize( {
    host: process.env.DB_HOST,
    database:process.env.DB_DATABASE,
    username:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    timezone: "-3:00",
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});