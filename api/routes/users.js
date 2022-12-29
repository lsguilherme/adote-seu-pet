import express from 'express'
const router = express.Router();

import { getUser, getUsers, login, remove, save, update, updateEmail, updateSenha } from "../controller/users.js";
import { auth } from './middlewares/auth.js';

router.post('/login', login);
router.delete('/:id', auth, remove);
router.put('/:id', auth, update);
router.put('/email/:id', auth, updateEmail);
router.put('/senha/:id', auth, updateSenha);
router.post('/', save);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;