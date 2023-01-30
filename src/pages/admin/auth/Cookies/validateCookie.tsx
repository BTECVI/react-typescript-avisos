
import Cookie from 'js-cookie'

export default function ValidateCookie() {
  if (Cookie.get('auth')) {
    return true
  }
  else {
    return false
  }
}