import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Route, Routes } from "react-router-dom";


import { HeaderMegaMenu } from "./components/navbar";

import PaginaInicio from "./pages";
import Error404 from "./pages/404";

import Bachillerato from "./pages/secciones/bachillerato";

function Tiki() {
  return (
    <div className="Tiki">
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<PaginaInicio /> } />

        <Route path="/aviso">
          <Route path=":id/*" element={<p>Aviso renderizado con el id</p>} />

          <Route path="" element={<p>Aviso sin id</p>} />
        </Route>
        <Route path="/secciones">
          <Route path="bachillerato" element={<Bachillerato />} />
          <Route path="secundaria" element={<p>Secundaria</p>} />
          <Route path="primaria" element={<p>Proximamente</p>} />
          <Route path="preescolar" element={<p>Proximamente</p>} />
          <Route path="maternal" element={<p>Proximamente</p>} />

          <Route path="" element={<p>Sin seccion</p>} />
        </Route>

        <Route path="/dev/inicio" element={<p>Inicio</p>} />
        <Route path="/my-messages" element={<p>Mensajes</p>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default Tiki;
