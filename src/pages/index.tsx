import { Promocion } from "../utils/promocion";
import { ArticlesCardsGrid } from "../utils/card";

import CSS from './style.module.css'

export default function PaginaInicio () { 
  return (
    <>
    <div style={{ margin: '0 10px' }}>
      <h1 className={CSS.header}>Selecciona una sección escolar</h1>
    </div>
      <Promocion />
      <ArticlesCardsGrid />
    </>
  )
}