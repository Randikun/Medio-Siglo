import React, { useEffect } from "react";
import AddMensaje from "./AddMensaje";
import { useSelector, useDispatch } from "react-redux";
import getMensajes from "../actions/getMensajes";
import "./style/mensajes.css";
import { NavLink } from "react-router-dom";
const mafalda = require("../resources/mafaldita.jpeg");

export default function Mensajes() {
  const dispatch = useDispatch();
  const mensajes = useSelector((state) => state.mensajes);
  useEffect(() => {
    dispatch(getMensajes());
  }, [dispatch]);

  return (
    <div className="msgcontainer" >
      <section>
      <ul className="nav">
        <li className="link">
        
        <NavLink  to="/" className="link"> HOME </NavLink>

        </li>
        <li className="link">
          <NavLink  to="/mensajes" className="link"> MENSAJES </NavLink>
        </li>
      </ul>

      </section>
      <div className="msgPage">
        <section>
          <figure className="mafalda">
            <img src={mafalda} alt='mafalda'/>
          </figure>
        </section>
        <div className="cont">
        <AddMensaje />
        <section className="msgs">
          {mensajes.length > 0
            ? mensajes.map((m) => (
                <div key={m.id} className="msg">
                  <p className="msgtext">
                    {m.mensaje}
                    </p>
                  <span className="by">{m.autor}</span>
                </div>
              ))
            : null}
        </section>

        </div>
      </div>
    </div>
  );
}
