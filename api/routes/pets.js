import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({storage: multer.memoryStorage()});

import { buscarPetsFavoritados, favoritarPet, getPet, getPets, getPetsUser, getPetUser, removePet, salvarFotoPet, savePet, updatePet } from "../controller/pets.js";
import { auth } from './middlewares/authPets.js';


router.post('/', auth, upload.single('imagem'), savePet);
router.post('/foto', upload.single('foto'), salvarFotoPet);
router.post('/favorito/:id', auth, favoritarPet);
router.put('/:id', upload.single('imagem'), updatePet);
router.delete('/:id', removePet);
router.get('/user', getPetsUser);
router.get('/favorito', auth, buscarPetsFavoritados);
router.get('/:id', getPet);
router.get('/:id/user', getPetUser);
router.get('/', getPets);

export default router;
