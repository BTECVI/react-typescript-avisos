import { AvisoIndividual } from "./avisoIndividual";

import CSS from './paginaGrupo.style.module.css'
import GlobalCSS from '../../style.module.css'

const ejemploArray = [
  {
    image:
      "https://cdn.btecvi.com/avisos/votacion.jpg",
    link: "/aviso/democracia",
    titulo: "Votaciones para elegir una Sociedad de Alumnos. Sección Bachillerato",
    autor: "BTECVI",
    visitas: 567,
    horaPublicada: 5,
    id: 0,
  },
  {
    image:
      "https://cdn.btecvi.com/tests/mitin_bg.jpg",
    link: "/aviso/votaciones",
    titulo: "Mitin de planillas para elegir una Sociedad de Alumnos. Sección Bachillerato",
    autor: "BTECVI",
    visitas: 653,
    horaPublicada: 5,
    id: 1,
  },
  {
    image:
      "https://cdn.btecvi.com/tests/imaginate_bg.jpg",
    link: "/aviso/43xk423a1",
    titulo: "Imagínate un aviso",
    autor: "FUA",
    visitas: 543,
    horaPublicada: 5,
    id: 2,
  },
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
      <h1 className={GlobalCSS.header} style={{ fontSize: '1em' }}>(avisos.btecvi.com  se encuentra en constante desarrollo, si se encuentran fallos; pueden enviar un correo a: angel@lavin.cool - describiendo el problema. Este mensaje desaparecera cuando sea estable el sistema)</h1>
      <div className={CSS.avisos}>
        {items}
      </div>
    </div>
  );
}
