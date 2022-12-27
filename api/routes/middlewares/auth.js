import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const auth = (request, response, next) => {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        response.json({
            erro: true,
            message: 'Token inválido!'
        })
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        if (request.params.id != decoded.id) {
            response.status(401).json({
                erro: true,
                message: 'Usuário não autorizado!'
            })
        } else {
            next();
        }
    } catch (error) {
        response.json({
            erro: true,
            message: 'Token expirado!'
        })
    }
}