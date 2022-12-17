import express from 'express'
const router = express.Router();

import { getUsers, save } from "../controller/users.js";

router.get('/', getUsers);
router.post('/', save);

export default router;