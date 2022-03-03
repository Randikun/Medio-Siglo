
const { Foto, Comentario } = require("../db.js");


async function bulkCreateFotos(req, res) {
    let data = { ...req.body };
    try {
        const existentFotos = await Foto.findAll()

        if (existentFotos.length > 0) return res.send('Ya hay fotos precargadas')
        else {
            let valores = Object.values(data);
           
            valores.map(async f=>{

                const createdFoto = await Foto.create({
                  
                    img: f.img,
                   
                });
              

              
            })

            return res.send('Fotos precargadas con exito')
        }


    } catch (error) {
        console.log("ACA ROMPE");
        res.status(500).send("error al precargar fotos");
    }
}


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
    console.log("   FOTO ID", req.params.id)
    try {
         const foto = await Foto.findByPk(req.params.id,{
            include: {
              model: Comentario,
             },
          });
          console.log(foto)
         if (foto) return res.send(foto);
         else res.send('')
     } catch (error) {
         res.status(404).json("ha ocurrido un error")
     }
 }




module.exports = {getFotoDetail, getFotos, bulkCreateFotos}