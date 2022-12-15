import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config();

export const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.BD_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});