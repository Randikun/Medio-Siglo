import { useDispatch } from "react-redux";
import React, { useState } from "react";
import addMensaje from "../actions/addMensaje";
import "./style/addMensaje.css";

export function validate(state) {
  let errors = {};
  if (!state.autor) {
    errors.autor = "¿Cómo voy a saber de quien es el mensaje?";
  } else if (!state.mensaje) {
    errors.mensaje = "¿En serio no tenes nada para decirme?";
  }
  return errors;
}

export default function AddMensaje() {
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const [state, setState] = useState({
      autor:'',
      mensaje:''
  });

  
  function handleInputChange(e) {
    setState({
        ...state,
        [e.target.name] : e.target.value 
    });
    setErrors(validate(state))

    
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(state))
    if(!errors.autor && !errors.mensaje) {
      dispatch(addMensaje(state));
      setState({
      autor:'',
      mensaje:''})
    }
  }
  return (
    <div className="mensajeCont">
      <form className="msgForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="autor"
          autoComplete="off"
          type="text"
          name="autor"
          value={state.autor}
          placeholder="Escribe tu nombre"
          onChange={(e) => handleInputChange(e)}
        />
         {errors.autor && <h5 className="error">{errors.autor}</h5>}

          <textarea
          className="mensaje"
          autoComplete="off"
          type="textArea"
          name="mensaje"
          value={state.mensaje}
          placeholder="Escribe el mensaje"
          onChange={(e) => handleInputChange(e)}
        />
         {errors.mensaje && <h5 className="error">{errors.mensaje}</h5>}
      
              <button className="submitMsg" type="submit">
              ENVIAR
            </button>
      
        
      </form>
    </div>
  );
}
