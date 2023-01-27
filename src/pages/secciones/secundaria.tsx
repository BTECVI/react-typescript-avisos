import { SeleccionarGrupoComponente } from "./components/seleccionarGrupo";

import {
  IconSchool,
  IconMicroscope,
  IconBooks,
} from "@tabler/icons-react";

import CSS from '../style.module.css'
import { Promocion } from "../../utils/promocion";

const renderizarGrupos = [
  { titulo: "3er Grado", icon: IconSchool, color: "yellow", link: '/grupo/7418150382' },
  { titulo: "2do Grado", icon: IconMicroscope, color: "indigo", link: '/grupo/5011136854' },
  { titulo: "1er Grado", icon: IconBooks, color: "red", link: '/grupo/9554775786' },
];

export default function Secundaria() {
  return (
    <div>
      <h1 className={CSS.header}>Selecciona un grupo</h1>
      <SeleccionarGrupoComponente info={renderizarGrupos} />
      <Promocion />
    </div>
  );
}
