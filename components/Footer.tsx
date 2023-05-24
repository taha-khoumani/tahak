import Image from 'next/image'
import React from 'react'
import logo from "@/public/tahak.png"
import Separator from './Separator'


type Props = {}

export default function Footer({}: Props) {
  return (
    <div>
        <Separator/>
        <div className='general-margins flex flex-col gap-6 my-8'>
            <div className='flex items-center flex-col gap-6 sm:flex-row sm:justify-between'>
                <div className="flex items-center gap-2 sm:gap-2">
                    <p className="text-black font-bold text-4xl sm:text-5xl sm:tracking-widest">TK</p>
                    <Image className="h-9 w-10 sm:h-11 sm:w-12" src={logo} alt={'logo'} ></Image>
                </div>
                <p className='text-black text-center font-medium text-sm max-w-sm sm:hidden lg:block lg:max-w-sm'>
                I'd love to work for your company for <span className='text-blue1 font-bold'> FREE</span> to gain experience and grow as a front-end developer in my first professional role :) 
                </p>
                <div className="flex  text-4xl gap-8">
                    <a href="https://www.linkedin.com/in/taha-khoumani-97b379255/" target='_blank'>
                      <i className="hover:opacity-50 transition-opacity fa-brands cursor-pointer fa-linkedin text-linkBlue"></i>
                    </a>
                    <a href="https://github.com/taha-khoumani" target='_blank'>
                      <i className="hover:opacity-50 transition-opacity fa-brands cursor-pointer fa-github text-github"></i>
                    </a>
                    <a href="https://twitter.com/tagopix" target='_blank'>
                      <i className="hover:opacity-50 transition-opacity fa-brands cursor-pointer fa-twitter text-twitter"></i>
                    </a>
                </div>
            </div>
            <p className='hidden text-black text-center font-medium text-sm sm:block lg:hidden'>
            I'd love to work for your company for <span className='text-blue1 font-bold'> FREE</span> to gain experience and grow as a front-end developer in my first professional role :) 
            </p>
        </div>
    </div>
  )
}