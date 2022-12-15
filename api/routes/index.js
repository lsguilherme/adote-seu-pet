import express from 'express'

const router = express.Router();

import usersRoutes from "./users.js";
//import { petsRoutes } from "./pets.js";

router.use('/usuarios', usersRoutes)
//router.use('/pets', petsRoutes)

export default router;