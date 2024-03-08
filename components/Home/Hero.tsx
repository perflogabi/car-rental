import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2'>
        <div>
            <h2 className=' text=[40px] md:text-[60px]'>
                Premium Car Rental in Your
                <h2 className=' text-[20px] text-gray-500 pr-20'>
                    Book the Car Now
                </h2>
                <button className=' h-2 mt-5 bg-orange-500 px-4 rounded-full hover:scale-105 transition-all'>Explore in REntal Car</button>
            </h2>
        </div>
        <div>
            <Image src='/hero.png' alt='hero' width={400} height={500} className=' w-full object-cover '/>
        </div>
    </div>
  )
}
