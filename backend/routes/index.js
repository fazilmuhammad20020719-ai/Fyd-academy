const router = require('express').Router()

const contactRoute = require('./contact')

router.use('/contact', contactRoute)

module.exports = router
