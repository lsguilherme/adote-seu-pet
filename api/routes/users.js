const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Rotas usuarios')
    console.log(`${res.statusCode} ${req.method} '${req.url}'`)
})

module.exports = router;