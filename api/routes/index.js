import express from 'express'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

import { auth } from './middlewares/auth.js';
import usersRoutes from "./users.js";
//import { petsRoutes } from "./pets.js";

router.get('/auth', auth, function (request, response) {
    response.json({
        erro: false,
        message: 'Token válido!'
    })
});
router.use('/usuarios', usersRoutes);
//router.use('/pets', petsRoutes)

export default router;