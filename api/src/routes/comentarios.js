//getComentarios de una foto, postComentario

const express = require('express')
const {getComentarios, postComentario} = require('../controllers/comentarios')
const router = express.Router()

 router.get("/fotoId", getComentarios)
 router.post('/fotoId', postComentario)


module.exports = router