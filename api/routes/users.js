import express from 'express'
const router = express.Router();

import { getUser, getUsers, remove, save, update } from "../controller/users.js";

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', save);
router.put('/:id', update)
router.delete('/:id', remove)

export default router;