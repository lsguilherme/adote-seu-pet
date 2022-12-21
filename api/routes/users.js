import express from 'express'
const router = express.Router();

import { getUser, getUsers, login, remove, save, update } from "../controller/users.js";

router.delete('/:id', remove);
router.put('/:id', update);
router.post('/login', login);
router.post('/', save);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;