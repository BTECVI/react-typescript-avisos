import { useParams, useSearchParams } from "react-router-dom"
import CSS from './style.module.css'
import GlobalCSS from '../style.module.css'

export default function AvisoIndividual () {
  const params = useParams()
  const [queryParameters] = useSearchParams()
  const query = queryParameters.get('filtro')
  console.log(query)
  return (
    <div style={{ margin: '10px' }}>
      <h1 className={GlobalCSS.header} style={{ fontSize: '1.2em' }}>
        Aviso id: {params.avisoId}
      </h1>
      <div className={CSS.content}>
        <div className={CSS.header}>
          <h2>Titulo iria en teoria aqui</h2>
          <span></span>
          <div className={CSS.fecha}>
            <h3>Fecha iria aqui - </h3>
            <span> (Hace 5 minutos)</span>
          </div>
        </div>
        <div className={CSS.main}>
          Aviso de creación
        </div>
      </div>
    </div>
  )
}