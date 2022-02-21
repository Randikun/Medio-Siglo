
const { Foto, Comentario } = require("../db.js");


async function getComentarios(req, res, next) {

    let { fotoId } = req.params

    try {
       
        const comentarios = await Comentario.findAll({
            where: {
                fotoId: fotoId
            },
         });
        if (comentarios.length > 0) return res.send(comentarios);
        else res.send([])

    } catch (error) {
        res.status(404).json("ha ocurrido un error")
    }
}

     

async function postComentario(req, res, next) { // User.addTickets(ticket)  Events.addTickets(ticket)
    let { fotoId } = req.params
    let { autor, comentario } = req.body;
       
    try {

        const foto = await Foto.findOne({
            where: {
                id: fotoId
            }

        });

            const postedComentario = await Comentario.create({
                autor: autor,
                comentario:comentario,
            });

            await foto.addComentario(postedComentario);
            

        res.send('comentario posteado correctamente');

    } catch (error) {
        res.status(404).json("ha ocurrido un error")
        }

}

module.exports = {getComentarios, postComentario}