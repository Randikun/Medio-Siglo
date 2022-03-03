import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./style/nav.css";

export default function Nav() {
  return (
    <div>
      <ul className="nav">
        <li className="link">
          <Link
            activeClass="active"
            to="DONDECUANDO"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            DONDE Y CUANDO
          </Link>
        </li>
        <li className="link">
          <Link
            activeClass="active"
            to="CONFIRMAR"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONFIRMAR ASISTENCIA
          </Link>
        </li>

        <li className="link">
          <Link
            activeClass="active"
            to="FOTOS"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            FOTOS
          </Link>
        </li>
        <li className="link">
          <NavLink  to="/mensajes" className="link"> MENSAJES </NavLink>
        </li>
      </ul>
    </div>
  );
}
