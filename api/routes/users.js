import express from 'express'
const router = express.Router();

import { getUsers } from "../controller/users.js";

router.get('/', getUsers);

export default router;