import React from "react";
import { Route, Routes } from "react-router-dom";
import Mensajes from "./components/Mensajes";
import Home from "./components/Home";
import FotoDetail from "./components/FotoDetail"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/mensajes" element={<Mensajes />} />
      <Route path="/fotos/:id" element= {<FotoDetail/>} />

    </Routes>
  );
}

export default App;
