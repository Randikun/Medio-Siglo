import React from "react";
import { NavLink } from "react-router-dom";
import "./style/nav.css";

export default function Nav() {
  return (
    <div>
      <ul className="nav">
        <li className="link">
          <a href="#DONDECUANDO" className="link" >DONDE Y CUANDO </a>
        </li>
        <li className="link">
          <a href="#CONFIRMAR" className="link" > CONFIRMAR ASISTENCIA </a>
        </li>

        <li className="link">
          <a href="#FOTOS" className="link" > FOTOS </a>
        </li>
        <li className="link" >
          <NavLink  to="/mensajes" className="link"> MENSAJES </NavLink>
        </li>
      </ul>
    </div>
  );
}