import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex flex-col mx-4 gap-10 lg:mx-24 sm:flex-row whitespace'> 
        <div className='sm:w-2/3'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-black' >
                Transforming Project 
                {/* <br/> */}
                <span className='text-turk1' > Ideas</span>  into Functional 
                {/* <br/> */}
                <span className='text-blue1' > Websites</span>
            </h1>
            <p className='text-sm text-black mb-6'>
                Welcome! I'm 
                <span className='font-bold text-purple'> Taha K</span>
                , a front-end developer dedicated to creating appealing and functional websites that stand out. Let's work together to turn your project ideas into reality!
            </p>
            <button className='btn gap-6  mx-auto mini-button-text' >
                <span>Explore my projects</span>
                <i className="fa-solid fa-arrow-down-long"></i>
            </button>
        </div>
        <div className='mx-auto w-3/4 sm:w-1/3 max-h-full hero-img'></div>
    </div>
  )
}