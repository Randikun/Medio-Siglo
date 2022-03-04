import React from "react";
import { Route, Routes } from "react-router-dom";
import Mensajes from "./components/Mensajes";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/mensajes" element={<Mensajes />} />

    </Routes>
  );
}

export default App;
