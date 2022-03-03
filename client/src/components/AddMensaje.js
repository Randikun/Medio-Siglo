import { useDispatch } from "react-redux";
import React, { useState } from "react";
import addMensaje from "../actions/addMensaje";
import "./style/addMensaje.css";

export default function AddMensaje() {
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
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addMensaje(state));
    setState({autor:'',
    mensaje:''})
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
          <input
          className="mensaje"
          autoComplete="off"
          type="textArea"
          name="mensaje"
          value={state.mensaje}
          placeholder="Escribe el mensaje"
          onChange={(e) => handleInputChange(e)}
        />
      
        <button className="submitMsg" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
}
