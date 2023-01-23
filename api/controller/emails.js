import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const validarEmail = (req, res) => {

    /*
    #swagger.tags = ['Emails']
    #swagger.summary = 'Enviar email com código TOTP'
    #swagger.parameters['TOTP'] = {
        in: 'body',
        required: true,
        type: 'string',
        schema: {
          "email": "string",
          "nome": "string",
          "totp": "string"
        }
    }
    */

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: (process.env.SMTP_PORT == '465') ? true : false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    let emailHTML = fs.readFileSync(__dirname.replace("controller", "") + "templates/validarEmail.html").toString()
    emailHTML = emailHTML.replace("{nome}", req.body.nome).replace("{totp}", req.body.totp);

    let info = {
        from: `Adote Seu Pet <${process.env.SMTP_USER}>`,
        to: `${req.body.nome} <${req.body.email}>`,
        subject: "Verificação de email",
        text: `Olá ${req.body.nome}, para validar este e-mail você vai precisar utilizar o código abaixo:\n\n${req.body.totp}\nCódigo temporário, por favor utiliza-lo rápido.`,
        html: emailHTML
    }

    transporter.sendMail(
        info,
        (err, info) => {
            if (err)
                res.status(500).json(err);
            else
                res.sendStatus(200);
        }
    )
}