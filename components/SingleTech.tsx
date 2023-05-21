import React from 'react'

type Props = {
    tech:string
}

export default function SingleTech({tech}: Props) {
  return (
    <div 
        className='single-tech mx-auto rounded-2xl p-4 w-20 h-20 xs:w-24 xs:h-24 sm:p-4.5 lg:w-28 lg:h-28' 
    >
        <div className='w-full h-full bg-blue-500' >

        </div>
    </div>
  )
}