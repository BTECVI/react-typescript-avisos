import { useState } from "react";
import { TextInput, PasswordInput } from "@mantine/core";

import CSS from "./CSS/auth.module.css";

import apiAuth from "../../../api/auth";
import { IconApi } from "@tabler/icons-react";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const [cargando, setCargando] = useState(false);
  async function procesarPost(e: any) {
    e.preventDefault();
    try {
    setCargando(true);
    const nuevoEnvio = {
      name: nombre,
      pass: password,
    };

    const respuesta = await apiAuth.post("/crearsession", nuevoEnvio);
    if (respuesta) setCargando(false);
    console.log(respuesta);
    } catch (error) {
      console.log('Hubo un error')
      console.log(error)
      setError('Se presento un error. ¿La contraseña y el usuario estan bien ingresados?')
      setCargando(false);
    }
  }
  return (
    <>
      <form onSubmit={procesarPost} className={CSS.formulario}>
        <TextInput
          placeholder="Escribir aqui"
          label="Nombre de usuario"
          withAsterisk
          value={nombre}
          onChange={(event) => setNombre(event.currentTarget.value)}
          error={error}
        />
        <PasswordInput
          placeholder="Escribir aqui"
          label="Contraseña"
          withAsterisk
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          error={error}
        />
        {!cargando && <button type="submit">Iniciar sesion</button>}
        {cargando && <p>Cargando</p>}
      </form>
    </>
  );
}
