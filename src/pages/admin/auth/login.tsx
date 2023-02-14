import { useState } from "react";
import { TextInput, PasswordInput } from "@mantine/core";

import CSS from "./CSS/auth.module.css";

import AddCookie from "./Cookies/addCookie";
import apiAuth from "../../../api/auth";
import { Loader } from "@mantine/core";

import { ToastContainer, toast } from "react-toastify";

import { Navigate } from "react-router-dom";

export default function Login({ validateAuth }: any) {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const notify_error = (text: string) =>
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [cargando, setCargando] = useState(false);
  async function procesarPost(e: any) {
    e.preventDefault();

    try {
      setCargando(true);

      const nuevoEnvio = {
        user: nombre,
        pass: password,
      };

      const respuesta = await apiAuth.post("/login", nuevoEnvio);

      if (respuesta) setCargando(false);

      if (respuesta.status === 200) {
        setError("");
        AddCookie("auth", respuesta.data.clave);
        location.reload();
      }
    } catch (error: any) {
      if (error.response) console.log(error.response.data.error);

      notify_error(error.response.data.error[0]);

      setError(
        "Se presento un error. ¿La contraseña y el usuario estan bien ingresados?"
      );
      setCargando(false);
    }
  }
  return (
    <>
      {validateAuth && <Navigate to="/admin/crear/aviso" />}
      <ToastContainer />
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
        {cargando && <Loader color="gray" variant="bars" />}
      </form>
    </>
  );
}
