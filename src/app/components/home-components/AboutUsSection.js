"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function AboutSection() {
    gsap.registerPlugin(ScrollTrigger)
    const image = useRef(null)
    const container = useRef(null)
    const container2 = useRef(null)
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.from(image.current,{
                x:-200,
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:container.current,
                    start:"top center"
                }

            })
            gsap.from(container2.current,{
                x:-200,
                opacity:0,
                duration:1,
                scrollTrigger:{
                    trigger:container.current,
                    start:"top center"
                }

            })
        },)
    },[])
  return (
    <section ref={container} className="py-16 w-screen h-screen flex justify-center items-center flex-col bg-[#f8f5f2]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="md:w-1/2  p-6">
          <Image
            ref={image}
            src="/coffeeShopInterior.webp"
            alt="About Our Cafe"
            width={600}
            height={300}
            className="rounded-lg sm:h-[70vh] h-[34vh] object-center object-cover  shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div ref={container2} className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-[#5c4033] mb-4">
            About Cozy Brew
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Cozy Brew, we craft every cup with care, using only premium beans
            and a passion for perfection. Our cafe is a place where friends meet,
            ideas spark, and every sip feels like home.
          </p>
          <a
            href="#menu"
            className="bg-[#5c4033] text-white px-5 py-2 rounded-lg hover:bg-[#4a3328] transition duration-300"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
