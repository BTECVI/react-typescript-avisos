import { Navigate, Outlet } from "react-router-dom";

export const RutaProtegida = ({ auth, children, redirectTo='https://avisos.btecvi.com/' }: any) => {
  if(!auth) {
    return <Navigate to='/admin/login' replace/>
  }

  return <Outlet />
}