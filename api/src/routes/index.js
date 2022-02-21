const  express  = require('express');

const comentariosRoute = require('./comentarios.js');
const fotosRoute = require('./fotos.js');
const asistenciasRoute = require('./asistencias.js')
const mensajesRoute = require('./mensajes.js')

const router = express.Router();

router.use('/fotos', fotosRoute)
router.use('/comentarios', comentariosRoute)
router.use('/asistencias', asistenciasRoute)
router.use('/mensajes', mensajesRoute)





module.exports = router;
