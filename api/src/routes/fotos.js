// bulkCreateFotos ,getFotos, getFotoDetail 

const express = require('express')
const {getFotos, getFotoDetail, bulkCreateFotos} = require('../controllers/fotos')
const router = express.Router()

 router.post("/", bulkCreateFotos)
 router.get("/", getFotos)
 router.post('/:id', getFotoDetail)


module.exports = router