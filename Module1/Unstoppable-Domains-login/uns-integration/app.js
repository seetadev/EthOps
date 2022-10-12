import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: '65cc8acc-806a-4e4b-8150-9b4d8d8e421a',
  redirectUri: 'http://localhost:3000',
})

window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()

    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}

window.logout = async () => {
  await uauth.logout()
  console.log('Logged out with Unstoppable')
}