//getmensajes, postMensaje

const express = require('express')
const {getMensajes, postMensaje} = require('../controllers/mensajes')
const router = express.Router()

 router.get("/", getMensajes)
 router.post('/', postMensaje)


module.exports = router