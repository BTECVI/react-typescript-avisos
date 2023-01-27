import { SeleccionarGrupoComponente } from "./components/seleccionarGrupo";

import {
  IconCreditCard,
  IconBuildingBank,
  IconCoin,
} from "@tabler/icons-react";

import CSS from '../style.module.css'
import { Promocion } from "../../utils/promocion";

const renderizarGrupos = [
  { titulo: "6to Semestre", icon: IconCreditCard, color: "yellow" },
  { titulo: "4to Semestre", icon: IconBuildingBank, color: "indigo" },
  { titulo: "2do Semestre", icon: IconCoin, color: "red" },
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
