import { useDispatch } from "react-redux";
import React, { useState } from "react";
import asistira from "../actions/asistira";
import noAsistira from "../actions/noAsistira";
import "./style/confirmar.css";

export function validate(state) {
  let errors = {};
  if (!state.nombre) {
    errors.nombre = "¿Cómo contar si venís o no, si no se tu nombre?";
  }
  return errors;
}

export default function ConfirmarAsistencia() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [asistencia, setAsistencia] = useState("asistencia");
  const [state, setState] = useState({
    nombre:""
  });

  function handleSelect(e) {
    e.preventDefault();
    setAsistencia(e.target.value);
  }
  function handleInputChange(e) {
    setState({nombre:e.target.value});
    setErrors(validate(state))

  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(state))
   if(!errors.nombre){
     if (asistencia === "asistencia") dispatch(asistira(state));
     else if (asistencia === "falluta") dispatch(noAsistira(state));
     setState({nombre:""})
   }

  }
  return (
    <div className="confirmarCont">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
       <div className="contNombre">

        <input
          className="nombre"
          autoComplete="off"
          type="text"
          name="nombre"
          value={state.nombre}
          placeholder="Escribe tu nombre"
          onChange={(e) => handleInputChange(e)}
        />
        {errors.nombre && <h5 className="error">{errors.nombre}</h5>}
       </div>

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
