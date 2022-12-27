import express from 'express'
const router = express.Router();

import { getUser, getUsers, login, remove, save, update, updateEmail } from "../controller/users.js";
import { auth } from './middlewares/auth.js';

router.delete('/:id', auth, remove);
router.put('/:id', auth, update);
router.put('/email/:id', auth, updateEmail);
router.post('/login', login);
router.post('/', save);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;