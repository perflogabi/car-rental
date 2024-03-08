import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export const NavBar = () => {
  return (
    <div className=' flex items-center justify-between p-3 px-5 shadow-md border-b-[1px]'>
        <Image src='/logorc.png' alt='logo' width={100} height={100} />
        <div className=' hidden  md:flex gap-5'>
            <h2 className=' hover:bg-orange-500 px-3 cursor-pointer rounded-full hover:text-white'>Home</h2>
            <h2 className=' hover:bg-orange-500 px-3 cursor-pointer rounded-full hover:text-white'>Sobre nós</h2>
            <h2 className=' hover:bg-orange-500 px-3 cursor-pointer rounded-full hover:text-white'>Contate-nos</h2>
        </div>
        <UserButton/>
    </div>
  )
}
