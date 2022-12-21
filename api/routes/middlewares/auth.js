import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const auth = (request, response, next) => {

    const authHeader = request.headers.authorization;
    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        next();
    } catch (error) {
        response.json({
            erro: true,
            message: 'Token expirado!'
        })
    }
}