import express from 'express';

const router = express.Router();

import usersRoutes from "./users.js";
import petsRoutes from "./pets.js";
import { gerarTOTP, login, validarTOTP } from '../controller/autenticacao.js';
import { validarEmail } from '../controller/emails.js';

router.use('/usuarios', usersRoutes);
router.post('/login', login);
router.post('/totp', gerarTOTP);
router.post('/totp/validar', validarTOTP);
router.post('/email/validar', validarEmail);
router.use('/pets', petsRoutes)

export default router;