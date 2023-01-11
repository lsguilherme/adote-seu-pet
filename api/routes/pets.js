import express from 'express'
const router = express.Router()

import { getPet, getPets, removePet, savePet, updatePet } from "../controller/pets.js";
import { auth } from './middlewares/authPets.js';


router.post('/', auth, savePet);
router.put('/:id', updatePet)
router.get('/:id', getPet)
router.get('/', getPets)
router.delete('/:id', removePet)

export default router;
