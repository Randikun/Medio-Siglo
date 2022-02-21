const { Asistencia, Falluta } = require("../db");

const addAsistencia = async (req, res) => {
  let { nombre } = req.body;
  try {
    const newAssistant = await Asistencia.create({
      nombre: nombre,
    });

    res.send("asistencia de " + newAssistant + " confirmada");
  } catch {
    res.status(500).send("ha ocurrido un error");
  }
};

const addFalluta = async (req, res) => {
    let { nombre } = req.body;
    try {
      const newFalluta = await Falluta.create({
        nombre: nombre,
      });
  
      res.send("Ausencia confirmada, que pena");
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
