import { Navigate, Route, Routes } from "react-router-dom";

import { HeaderMegaMenu } from "./components/navbar";

import PaginaInicio from "./pages";
import Error404 from "./pages/404";

import Bachillerato from "./pages/secciones/bachillerato";

import PaginaGrupo from "./pages/secciones/components/paginaGrupo";

import Secundaria from "./pages/secciones/secundaria";

import CrearAviso from "./pages/admin/crearAviso";

import GetAuth from "./pages/aviso/tests/getAuth";

import Login from "./pages/admin/auth/login";

import ValidateCookie from "./pages/admin/auth/Cookies/validateCookie";
import { RutaProtegida } from "./components/RutaProtegida";

import AvisoId_43xk423a1 from "./pages/aviso/tests/avisoId_43xk423a1";
import AvisoId_democracia from "./pages/aviso/tests/avisoId_democracia";
import AvisoId_votaciones from "./pages/aviso/tests/avisoId_votaciones";

import 'react-toastify/dist/ReactToastify.css';

function Tiki() {
  console.log(ValidateCookie())
  return (
    <div className="Tiki">
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />

        <Route path="/aviso">
          <Route path="43xk423a1" element={<AvisoId_43xk423a1 />} />
          <Route path="votaciones" element={<AvisoId_votaciones />} />
          <Route path="democracia" element={<AvisoId_democracia />} />
          <Route path="" element={<p>Aviso sin id</p>} />
        </Route>
        <Route path="/secciones">
          <Route path="bachillerato" element={<Bachillerato />} />
          <Route path="secundaria" element={<Secundaria />} />
          <Route path="primaria" element={<p>Proximamente</p>} />
          <Route path="preescolar" element={<p>Proximamente</p>} />
          <Route path="maternal" element={<p>Proximamente</p>} />

          <Route path="" element={<p>Sin seccion</p>} />
        </Route>

        <Route path="/grupo">
          <Route path="*" element={<PaginaGrupo />} />
        </Route>

        <Route path="/admin">
          <Route path="login" element={<Login validateAuth={ValidateCookie()}/>} />
          <Route path="auth" element={<GetAuth />} />
          <Route element={<RutaProtegida auth={ValidateCookie()}/>}>
            <Route
              path="crear/aviso"
              element={
                <CrearAviso />
              }
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="/dev/inicio" element={<p>Inicio</p>} />
        <Route path="/my-messages" element={<p>Mensajes</p>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Tiki;

// <Route path=":avisoId/*" element={<Aviso />} />