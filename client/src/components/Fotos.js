import React from "react";
import * as GrIcons from "react-icons/gr";

import "./style/fotos.css";
import {fotosCarrusel} from "../utils"

export default function Fotos() {
  let posicionActual = 0;

  function next() {
    if(posicionActual >= fotosCarrusel.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

function prev() {
    if(posicionActual <= 0) {
        posicionActual = fotosCarrusel.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

function renderizarImagen () {
  const foto = document.querySelector('.foto')
  foto.src= fotosCarrusel[posicionActual].img
}

  return (
    <div className="carousel">
        <button id="prev" onClick={()=>prev()} className='btnicon'> <GrIcons.GrPrevious  className='icon' /></button>
       <figure className="pic">
         <img className="foto" src={fotosCarrusel[posicionActual].img} alt="foto"/>
         </figure> 
        <button id="next" onClick={()=>next()} className='btnicon'><GrIcons.GrNext  className='icon'/></button>
    </div>
 
  );
}
