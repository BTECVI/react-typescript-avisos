
import Cookie from 'js-cookie'

export default function GetCookie(cookie: any) {
  if (cookie !== undefined) {
    return Cookie.get(cookie)
  }
  else {
    return 'No hay cookie'
  }
}