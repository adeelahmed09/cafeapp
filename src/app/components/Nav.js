"use client"
import React, { useLayoutEffect, useRef } from 'react'
import { playfair } from './font'
import gsap from 'gsap'

function Nav() {
  const container = useRef(null)
  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(container.current,{
        y:-200,
        duration:1,

      })
    },container)
    return ()=> ctx.revert()
  },[])
  return (
    <div ref={container} className='w-full z-30 sm:px-[5vw] px-4 sm:py-[2vw] py-6 flex justify-between border-b-[#D4A373] absolute top-0 bg-[white] border-b-2'>
      <div>
        <h1 className={`${playfair.className} font-bold text-3xl text-[#D4A373]`}>Cozy Brew Coffee</h1>
      </div>
      <div className={`${playfair.className} hidden items-center sm:flex  transition gap-10 text-[#D4A373] text-xl font-bold`}>
        <div className='hover:text-[#b87333]'>Home</div>
        <div className='hover:text-[#b87333]'>Menu</div>
        <div className='hover:text-[#b87333]'>Contact Us</div>
      </div>
    </div>
  )
}

export default Nav
