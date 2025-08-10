"use client"
import React, { useLayoutEffect, useRef } from 'react'
import { playfair } from './font'
import gsap from 'gsap'

function StarterLaoder() {
    const container = useRef(null)
    useLayoutEffect(()=>{
        gsap.to(container.current,{
            height:0,
            duration:.5,
        })
    }
    ,[])
  return (
    <div ref={container} className='h-screen overflow-hidden z-50 flex justify-center items-center w-screen fixed top-0 bg-white '>
      <h1 className={`${playfair.className} font-bold lg:text-6xl sm:text-5xl text-4xl text-[#D4A373]`}>Cozy Brew Coffee</h1>
    </div>
  )
}

export default StarterLaoder
