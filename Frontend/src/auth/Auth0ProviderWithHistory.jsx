import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { Outlet, useNavigate } from 'react-router-dom'

const Auth0ProviderWithHistory = () => {

    const navigate = useNavigate()

    const onRedirectCallback = (appState) => {
        // const appState = {
        //     returnTo: 'myAccount'
        // }
        navigate(appState?.returnTo || window.location.pathname)
    }

  return (
    <Auth0Provider
    domain= {import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    onRedirectCallback={onRedirectCallback}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Outlet />
  </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory