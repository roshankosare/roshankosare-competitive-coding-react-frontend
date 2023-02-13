import React from 'react'
import Logo from '../../common/Logo'
import { AuthModelProvider } from '../authModel/context/AuthModelContext'
import AuthLinks from './compoents/AuthLinks'
import Links from './compoents/Links'

const Header = () => {
  return (
    <div className="flex justify-between p-2 w-screen h-14 pt-3 bg-white ">
    <Logo size={3}/>
    {/* TODO:- make header responsive */}
   <Links></Links>
  <AuthModelProvider>
  <AuthLinks></AuthLinks>
  </AuthModelProvider>
  </div>
  )
}

export default Header