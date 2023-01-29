import CrearEditor from "../utils/CrearEditor";
import InputHeader from "./inputHeader";
import SeleccionarSecciones from "./seleccionarSecciones";

import CSS from "./style.module.css";

import { useState } from "react";

import { useRef } from "react";
import SeleccionarGrupoEspecifico from "./seleccionarGrupoEspecifico";

export default function CrearAviso() {
  const [valorSecciones, setValorSecciones] = useState<string[]>([]);
  const [valorBusqueda, valorBusquedaCambio] = useState("");

  const [valorSalon, setValorSalon] = useState([]);
  const refTitulo = useRef<HTMLInputElement>(null);
  console.log(refTitulo)

  const tomarTitulo = () => {
    if(refTitulo.current) return refTitulo.current.value
  }
  const solicitud = () => {
    console.log('Salones seleccionados:')
    console.log(valorSalon)
    console.log(`Titulo de aviso: ${tomarTitulo()}
    
A que secciones va dirigido del aviso: ${valorSecciones}`)
  }
  return (
    <>
      <div className={CSS.main}>
        <div className={CSS.inputs}>
          <InputHeader referencia={refTitulo} />
          <SeleccionarSecciones valor={valorSecciones} cuandoCambie={setValorSecciones} />
          <SeleccionarGrupoEspecifico
            valorBusqueda={valorBusqueda}
            valorBusquedaCambio={valorBusquedaCambio}
            setValorSalon={setValorSalon}
          />
        </div>
        <div className={CSS.editor}>
          <CrearEditor />
        </div>
      </div>
      <button onClick={() => solicitud()}>Cargar solicitud en consola</button>
    </>
  );
}
