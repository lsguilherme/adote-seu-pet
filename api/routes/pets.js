import express from 'express'
const router = express.Router()

import { getPet, getPets, getPetsUser, getPetUser, removePet, savePet, updatePet } from "../controller/pets.js";
import { auth } from './middlewares/authPets.js';


router.post('/', auth, savePet);
router.put('/:id', updatePet);
router.delete('/:id', removePet);
router.get('/user', getPetsUser);
router.get('/:id', getPet);
router.get('/:id/user', getPetUser);
router.get('/', getPets);

export default router;
