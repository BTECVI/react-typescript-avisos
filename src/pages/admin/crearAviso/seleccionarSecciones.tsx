import { Checkbox } from '@mantine/core';

interface PropiedadesCheckBox {
  valor: any
  cuandoCambie: any
}

export default function SeleccionarSecciones({valor, cuandoCambie}: PropiedadesCheckBox) {
  

  return (
    <Checkbox.Group
      value={valor} onChange={cuandoCambie}
      label="Seccion escolar"
      description="Este anuncio se mostrara globalmente en las siguientes secciones escolares:"
    >
      <Checkbox value="bachillerato" label="Bachillerato" />
      <Checkbox value="secundaria" label="Secundaria" />
    </Checkbox.Group>
  );
}