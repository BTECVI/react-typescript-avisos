import AddCookie from "../../admin/auth/Cookies/addCookie"

export default function getAuth () {
  AddCookie('auth', 'test')
  return <div>Autentificado</div>
}