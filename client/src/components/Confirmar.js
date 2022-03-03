import { useDispatch } from "react-redux";
import React, { useState } from "react";
import asistira from "../actions/asistira";
import noAsistira from "../actions/noAsistira";
import "./style/confirmar.css";

export default function ConfirmarAsistencia() {
  const dispatch = useDispatch();
  const [asistencia, setAsistencia] = useState("asistencia");
  const [nombre, setNombre] = useState({
    nombre:""
  });

  function handleSelect(e) {
    e.preventDefault();
    setAsistencia(e.target.value);
  }
  function handleInputChange(e) {
    setNombre({nombre:e.target.value});
     
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(nombre)
    if (asistencia === "asistencia") dispatch(asistira(nombre));
    else if (asistencia === "falluta") dispatch(noAsistira(nombre));
    setNombre({nombre:""})
  }
  return (
    <div className="confirmarCont">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="nombre"
          autoComplete="off"
          type="text"
          name="nombre"
          value={nombre.nombre}
          placeholder="Escribe tu nombre"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          className="select"
          onChange={(e) => {
            handleSelect(e);
          }}
        >

          <option className="option" value="asistencia">
            Asistiré
          </option>
          <option className="option" value="falluta">
            No asistiré
          </option>
        </select>
        <button className="submit" type="submit">
          CONFIRMAR
        </button>
      </form>
    </div>
  );
}
