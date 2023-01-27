import { AvisoIndividual } from "./avisoIndividual";

import CSS from './paginaGrupo.style.module.css'
import GlobalCSS from '../../style.module.css'

const ejemploArray = [
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg",
    link: "/",
    titulo: "Titulo de Prueba...",
    autor: "FUA",
    visitas: 3,
    horaPublicada: 5,
    id: 0,
  },
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/paz.jpg",
    link: "/",
    titulo: "Titulo de Prueba 2... || Dia de la paz mundial",
    autor: "FUA",
    visitas: 3,
    horaPublicada: 5,
    id: 1,
  },
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg",
    link: "/",
    titulo: "Titulo de Prueba...",
    autor: "FUA",
    visitas: 3,
    horaPublicada: 5,
    id: 2,
  },
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg",
    link: "/",
    titulo: "Titulo de Prueba...",
    autor: "FUA",
    visitas: 3,
    horaPublicada: 5,
    id: 3,
  },
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg",
    link: "/",
    titulo: "Titulo de Prueba 5...",
    autor: "FUA",
    visitas: 1,
    horaPublicada: 5,
    id: 4,
  },
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg",
    link: "/",
    titulo: "Titulo de Prueba 6...",
    autor: "FUA",
    visitas: 3,
    horaPublicada: 5,
    id: 5,
  },
  {
    image:
      "https://usc1.contabostorage.com/4dff45e2e3c74b3ba6ff7cc8146f2c3a:btecvi/navidad.jpg",
    link: "/",
    titulo: "Titulo de Prueba 7...",
    autor: "FUA",
    visitas: 3,
    horaPublicada: 5,
    id: 6,
  }
]

export default function PaginaGrupo() {
  const items = ejemploArray.map((item: any) => (
    <AvisoIndividual
      image={item.image}
      link={item.link}
      titulo={item.titulo}
      autor={item.autor}
      visitas={item.visitas}
      horaPublicada={item.horaPublicada}
      key={item.id}
    />
  ));
  return (
    <div>
      <h1 className={GlobalCSS.header} style={{ fontSize: '1em' }}>(avisos.btecvi.com  se encuentra en constante desarrollo, por el momento solo es una maquetación, antes del 1 de Febrero se lanzara una version funcional. Este mensaje desaparecera cuando sea estable el sistema)</h1>
      <div className={CSS.avisos}>
        {items}
      </div>
    </div>
  );
}
