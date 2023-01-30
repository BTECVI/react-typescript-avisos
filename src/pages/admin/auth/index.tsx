import GetCookie from "./Cookies/getCookie"

export default function Admin() {
  return (
    <div>{GetCookie('auth')} RANDOM</div>
  )
}