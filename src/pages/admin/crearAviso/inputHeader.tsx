import { TextInput } from '@mantine/core';
export default function InputHeader ({referencia}: any) {
  return (
    <TextInput
      placeholder="Titulo del aviso"
      label="Titulo"
      ref={referencia}
      withAsterisk
    />
  );
}