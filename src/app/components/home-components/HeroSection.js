"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { playfair } from '../font'
import gsap from 'gsap'
function HeroSection() {
    const container = useRef(null)
    const image = useRef(null)
    const bgContainer = useRef(null)
    const headingBox = useRef(null)
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            const tl = gsap.timeline({delay:.5})
            tl.from(bgContainer.current,{
                x:-200,
                duration:1,
                opacity:0
            },0)
            tl.from(headingBox.current,{
                x:-500,
                duration:1,
                opacity:0
            },0)
            tl.from(image.current,{
                x:100,
                y:-50,
                rotate:-20,
                duration:1,
                opacity:0
            },0)
            
        },container)
        
        return ()=>ctx.revert()
    },[])
    return (
        <div ref={container} className=' w-screen h-screen flex pt-[20vh] sm:items-center shadow-2xl overflow-hidden bg-[#6B4226] relative'>
            <div ref={bgContainer} className='bg-[#F1E0D6] shadow-2xl sm:h-[150vh] h-[50vh] -z-0 w-screen absolute sm:rounded-br-[65%] rounded-br-[45%]  top-[0]  sm:top-[-50%] sm:left-[-20%]'>
            </div>
            <Image ref={image} src={"/HeroCoffeCup.png"} width={700} height={700} alt='coffe cup' className='z-40 absolute  lg:w-[600px] sm:w-[450px] sm:h-auto w-[500px] h-[500px] object-center object-cover -bottom-12 sm:-right-16' />
            <div ref={headingBox} className='z-20 sm:pl-[5vw] px-2.5 flex flex-col gap-4'>
                <h1 className={`${playfair.className} lg:text-7xl sm:text-5xl text-4xl tracking-tighter z-20 font-bold text-[#6B4226]`}>
                    Brewing Warmth <br /> In Every Cup.
                </h1>
                <p className="lg:text-lg sm:text-sm text-gray-700 mb-4">Brewed fresh, served with love — your perfect coffee awaits.</p>
                <button className="bg-yellow-500 w-fit text-white px-6 py-2 rounded-lg hover:bg-yellow-700 shadow-xl transition duration-300">
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default HeroSection
