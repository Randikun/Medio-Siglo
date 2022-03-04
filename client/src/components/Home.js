import React, { useEffect } from "react";
import Nav from "./Nav";
import Donde from "./Donde";
import Cuando from "./Cuando";
import Countdown from "./Countdown";
import Fotos from "./Fotos";
import ConfirmarAsistencia from "./Confirmar";

import ReactAudioPlayer from "react-audio-player";
import song from "../resources/rayOfLight.mp3";

import "./style/home.css";
const insopor = () => {
  const audioPlayer = document.getElementById("audio");
  audioPlayer.play();
};
export default function Home() {

  useEffect(() => {
    window.addEventListener("mouseover", insopor());
  }, []);

  return (
    <div className="container">
      <Nav />
      <section className="portada">
          <h1>MEDIO SIGLO </h1>
          <Countdown className="time"/>
      </section>
      <section className="dondecuando" title="DONDECUANDO" id="DONDECUANDO">
        <div className="donde">
          <Donde />
        </div>
        <div className="cuando">
          <Cuando />
        </div>
      </section>
      <section title="FOTOS" id="FOTOS" className="fotosSeccion">
        <Fotos />
      </section>
      <section title="CONFIRMAR" id="CONFIRMAR">
        <ConfirmarAsistencia />
      </section>
      <div className="player">

        <ReactAudioPlayer id="audio" src={song} autoPlay={true} controls />
      </div>
    </div>
  );
}