import React from "react";
import "./style/donde.css";
const casa = require("../resources/CASA.jpeg");

export default function Donde() {
  function showMap() {
    var body = document.getElementsByTagName("body");
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    body.style.overflow = "hidden";
    body.style.position = "relative";
    body.style.height = "0";
  }

  function closeMap() {
    var modal = document.getElementById("myModal");
    var body = document.getElementsByTagName("body");

    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }

  window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    var body = document.getElementsByTagName("body");

    if (event.target === modal) {
      modal.style.display = "none";
      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }
  };

  return (
    <div className="dondeContainer">
      <h2 className="title">¿Dónde? </h2>

     <div className="content">
      <figure className="figure">
        <img className="casa" src={casa} />
      </figure>
      <h4 className="location">En mi casa!</h4>
      <h6 className="dire">Ampere 7261, Villa Belgrano, Córdoba</h6>
      <button id="btnModal" className="btn" onClick={() => showMap()}>
        VER EN EL MAPA
      </button>
     </div>
      <div id="myModal" className="modalContainer">
        <div className="modal-content">
          <span className="close" onClick={() => closeMap()}>
            ×
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.5182448323035!2d-64.26526165459434!3d-31.349941244072095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329ea2278144ff%3A0x83f3d39f1a8f3cc6!2zQW5kcsOpcyBNYXLDrWEgQW1wZXJlIDcyNjEsIEPDs3Jkb2Jh!5e0!3m2!1ses!2sar!4v1646146771686!5m2!1ses!2sar"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
