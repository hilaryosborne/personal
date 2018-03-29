import React from 'react'

const authRefresh = () => {
  console.log('refreshing')
}

const authUser = () => {
  console.log('getting user')
}

const authLogout = () => {
  console.log('logging out')
}

export const withAuth = (Component) => {
  const authProps = {
    authRefresh, authUser, authLogout
  }
  return (props) => {
    return <Component {...props} {...authProps} />
  }
}
