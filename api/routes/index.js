const express = require('express')
const router = express.Router()
const usersRoutes = require('./users')
const petsRoutes = require('./pets')

router.get('/', (req, res) => {
    res.send('API rodando')
    console.log(`${res.statusCode} ${req.method} '${req.url}'`)
})

router.use('/users', usersRoutes)
router.use('/pets', petsRoutes)

module.exports = router;