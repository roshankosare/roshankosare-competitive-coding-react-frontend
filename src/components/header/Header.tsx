import React from 'react'
import Logo from '../../common/Logo'
import { AuthModelProvider } from '../authModel/context/AuthModelContext'
import AuthLinks from './compoents/AuthLinks'
import Links from './compoents/Links'

const Header = () => {
  return (
    <div className="flex justify-between px-2  w-screen h-16 pt-3 bg-white pb-5 ">
    <Logo size={3}/>
    {/* TODO:- make header responsive */}
   <div className='hidden sm:block'><Links></Links></div>
  <AuthModelProvider>
  <AuthLinks></AuthLinks>
  </AuthModelProvider>
  </div>
  )
}

export default Header