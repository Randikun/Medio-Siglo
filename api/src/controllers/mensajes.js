const { Mensaje } = require("../db.js");


async function getMensajes(req, res) {
    try {
        const mensajes = await Mensaje.findAll();
        if (mensajes.length > 0) return res.send(mensajes);
        else res.send([])

    } catch (error) {
        res.status(404).json("ha ocurrido un error")
    }
}

     

async function postMensaje(req, res) { 
    let { autor, mensaje } = req.body;
    try {
            const postedMensaje = await Mensaje.create({
                autor: autor,
                mensaje:mensaje,
            });          

        res.send('mensaje posteado correctamente');

    } catch (error) {
        res.status(404).json("ha ocurrido un error")
        }

}


module.exports = {getMensajes, postMensaje}