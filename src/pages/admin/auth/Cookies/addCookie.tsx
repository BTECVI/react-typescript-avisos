
import Cookie from 'js-cookie'

export default function AddCookie(cookie_name: any, token: any) {
  if (cookie_name !== undefined && token !== undefined) {
    Cookie.set(cookie_name, token, {
      expires: 1,
      secure: false,
      sameSite: 'strict',
      path: '/'
    })
    return 'Agregada'
  } else {
    return false
  }
}