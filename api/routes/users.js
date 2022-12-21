import express from 'express'
const router = express.Router();

import { getUser, getUsers, login, remove, save, update } from "../controller/users.js";
import { auth } from './middlewares/auth.js';

router.get('/auth', auth, function (request, response) {
    response.json({
        erro: false,
        message: 'Token válido!'
    })
});

router.delete('/:id', auth, remove);
router.put('/:id', auth, update);
router.post('/login', login);
router.post('/', save);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;