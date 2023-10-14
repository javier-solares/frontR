// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import Instalaciones from "./instalaciones"; 

function Inicio() {
  return <div>Esta es la página de inicio</div>;
}

function Habitaciones() {
  return <div>Esta es la página de habitaciones</div>;
}

function Contactanos() {
  return <div>Esta es la página de contacto</div>;
}

function AppRouter() {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/habitaciones" component={Habitaciones} />
        <Route path="/instalaciones" component={Instalaciones} /> 
        <Route path="/contactanos" component={Contactanos} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
