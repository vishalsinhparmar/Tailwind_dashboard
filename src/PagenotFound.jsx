import React from 'react'
import NavbarApp from './NavbarApp'
import SidebaarApp from './SidebaarApp'

export default function PagenotFound() {
  return (
    <>
     <div className="flex">
    <SidebaarApp/>
    <div className="flex-grow p-6">
     <NavbarApp/>
     <div className='ml-64 p-5'>
        <h1 className='font-bold text-4xl text-center mb-4 '>Page Not Found 404</h1>
        <hr className='mx-auto border-black w-56 border-spacing-4' />
        <img className='w-128 mx-auto' src='https://consultation.co.jp/img/404-page-animation-example.gif'/>
     </div>
    </div>
  </div>
    </>
  )
}
