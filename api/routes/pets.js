import express from 'express'

const router = express.Router()

export const getPets = router.get((req, res) => {
    res.send('Rotas pets')
    console.log(`${res.statusCode} ${req.method} '${req.url}'`)
})
