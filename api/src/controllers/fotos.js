const bulkCreateFotos = async(req, res)=>{}

const { Foto } = require("../db.js");


async function getFotos(req, res) {

   try {
        const fotos = await Foto.findAll();
        if (fotos.length > 0) return res.send(fotos);
        else res.send([])
    } catch (error) {
        res.status(404).json("ha ocurrido un error")
    }
}

async function getFotoDetail(req, res) {
    try {
         const foto = await Foto.findAll({
             where:{
                 id: req.params.id
         }});
         if (fotos) return res.send(foto);
         else res.send('')
     } catch (error) {
         res.status(404).json("ha ocurrido un error")
     }
 }




module.exports = {getFotoDetail, getFotos, bulkCreateFotos}