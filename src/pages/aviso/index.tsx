import { useParams, useSearchParams } from "react-router-dom"
import CSS from './style.module.css'
import GlobalCSS from '../style.module.css'
import { useEffect } from "react"

import api from '../../api/traerAvisos'

import AddCookie from '../admin/auth/Cookies/addCookie'

export default function AvisoIndividual () {




  useEffect(() => {
    const traerData = async () => {
      try {
        console.log(AddCookie('auth', '7943346e-230a-4d8c-8a4a-462752cea7d40-0835b022696a468a-363c1d62697be3a45d2e7469bb4896a8c1d1-373578e7-1675043945342'))
        const response = await api.get('/')
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    traerData()
  }, [])

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