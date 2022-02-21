import "./App.css";

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
         <Route path="/" component={Nav}/>
         <Route exact path="/" component={Home}/>
         <Route path="/mensajes" component={Mensajes}/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
