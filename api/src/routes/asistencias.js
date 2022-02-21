//addasistencia, addfallutas, getasistencias, getFallutas


const express = require('express')
const {addAsistencia, addFalluta, getAsistencias, getFallutas} = require('../controllers/asistencias')
const router = express.Router()

 router.get("/", getAsistencias)
 router.post('/', addAsistencia)
 
 router.get("/fallutas", getFallutas)
 router.post('/falluta', addFalluta)


module.exports = router