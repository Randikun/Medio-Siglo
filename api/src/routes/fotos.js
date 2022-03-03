// bulkCreateFotos ,getFotos, getFotoDetail 

const express = require('express')
const {getFotos, getFotoDetail, bulkCreateFotos} = require('../controllers/fotos')
const router = express.Router()

 router.post("/bulk", bulkCreateFotos)
 router.get("/", getFotos)
 router.get('/:id', getFotoDetail)


module.exports = router