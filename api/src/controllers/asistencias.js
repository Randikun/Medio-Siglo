const { Asistencia, Falluta } = require("../db");

const addAsistencia = async (req, res) => {
  let { nombre } = req.body;
  
  try {
    if(nombre){
    const newAssistant = await Asistencia.create({
      nombre: nombre,
    });

    res.json(newAssistant );}
    else res.send('faltan datos')
  } catch {
    res.status(500).send("ha ocurrido un error");
  } 
};

const addFalluta = async (req, res) => {
    let { nombre } = req.body;
    try {
      if (nombre){
        const newFalluta = await Falluta.create({
          nombre: nombre,
        });
    
        res.json(newFalluta);
      }
      else res.send('faltan datos')

    } catch {
      res.status(500).send("ha ocurrido un error");
    }
};

const getAsistencias = async (req, res) => {
    try {
        const asistencias = await Asistencia.findAll();
        res.json(asistencias);
      } catch {
        res.status(500).send("ha ocurrido un error");
      }
};

const getFallutas = async (req, res) => {
    try {
        const fallutas = await Falluta.findAll();
        res.json(fallutas);
      } catch {
        res.status(500).send("ha ocurrido un error");
      }
};

module.exports = { getFallutas, getAsistencias, addFalluta, addAsistencia };
