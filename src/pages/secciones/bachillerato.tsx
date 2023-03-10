import { SeleccionarGrupoComponente } from "./components/seleccionarGrupo";

import {
  IconSchool,
  IconMicroscope,
  IconBooks,
} from "@tabler/icons-react";

import CSS from '../style.module.css'
import { Promocion } from "../../utils/promocion";

const renderizarGrupos = [
  { titulo: "6to Semestre", icon: IconSchool, color: "yellow", link: '/grupo/7418150382' },
  { titulo: "4to Semestre", icon: IconMicroscope, color: "indigo", link: '/grupo/5011136854' },
  { titulo: "2do Semestre", icon: IconBooks, color: "red", link: '/grupo/9554775786' },
];

export default function Bachillerato() {
  return (
    <div>
      <h1 className={CSS.header}>Selecciona un grupo</h1>
      <SeleccionarGrupoComponente info={renderizarGrupos} />
      <Promocion />
    </div>
  );
}
