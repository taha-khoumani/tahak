import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex flex-col gap-10 mx-4 sm:mx-16 lg:mx-24 lg:gap-0 lg:flex-row'> 
        <div className='mx-auto sm:mx-0 sm:text-center lg:text-left'>
            <h1 className='text-black font-bold text-4xl mb-4 sm:text-5xl sm:mb-6 lg:mb-8' >
                Transforming Project 
                <br/>
                <span className='text-turk1' > Ideas</span>  into Functional 
                <br/>
                <span className='text-blue1' > Websites</span>
            </h1>
            <p className='text-sm text-black mb-6 sm:mb-10 lg:mb-14'>
                Welcome! I'm 
                <span className='font-bold text-purple'> Taha K</span>
                , a front-end developer dedicated <br /> to creating appealing and functional websites that stand out. <br />  Let's work together to turn your project ideas into reality!
            </p>
            <button className='btn gap-5 mr-auto mini-button-text w-full sm:w-80 sm:mx-auto lg:mx-0' >
                <span>Explore my projects</span>
                <i className="fa-regular fa-circle-down text-lg items-baseline"></i>
            </button>
        </div>
        <div className='hero-img mx-auto w-full h-80 lg:my-auto lg:w-auto lg:flex-grow lg:self-stretch'></div>
    </div>
  )
}