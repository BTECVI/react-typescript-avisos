import { MultiSelect } from '@mantine/core';

interface EstasPropiedades {
  valorBusqueda: any
  valorBusquedaCambio: any
  setValorSalon: any
}

import { useRef } from 'react';


export default function SeleccionarGrupoEspecifico({valorBusqueda, valorBusquedaCambio, setValorSalon}: EstasPropiedades) {
  const refex = useRef<HTMLInputElement>(null);
  console.log(refex)
  const data = [
    { value: '6to_prepa', label: '6to Semestre', group: 'Bachillerato' },
    { value: '4to_prepa', label: '4to Semestre', group: 'Bachillerato' },
    { value: '2do_prepa', label: '2do Semestre', group: 'Bachillerato' },
    { value: '3ro_secu', label: '3ro Secundaria', group: 'Secundaria' },
    { value: '2do_secu', label: '2do Secundaria', group: 'Secundaria' },
    { value: '1ro_secu', label: '1ro Secundaria', group: 'Secundaria' }
  ]
  return (
    <>
    <MultiSelect
      ref={refex}
      data={data}
      onChange={values => { setValorSalon(values.map(value => data.find(item => item.value === value))) }}
      label="Aviso por salon"
      placeholder="Seleccionar grupo/s"
      searchable
      searchValue={valorBusqueda}
      onSearchChange={valorBusquedaCambio}
      nothingFound="Nothing found"
    />
    </>
  );
}