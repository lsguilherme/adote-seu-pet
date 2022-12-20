import express from 'express'
const router = express.Router();

import { getUser, getUsers, login, remove, save, update } from "../controller/users.js";

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', save);
router.put('/:id', update)
router.delete('/:id', remove);
router.post('/login', login);

export default router;