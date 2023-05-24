import React from 'react'
import SingleTech from './SingleTech'
import data from "@/lib/data"

type Props = {}

export default function TechStack({}: Props) {

  const technologies = data.techStack.map(tech=><SingleTech techData={tech} key={tech.name} />)

  return (
    <div className='general-margins flex flex-col items-center gap-10 sm:gap-14'>
      <div className='text-center' >
        <h2 className='headings' >My Tech Stack</h2>
        <p className='sub-headings'>Cutting-Edge Tools and Technologies</p>
      </div>
      <div className='grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6' >
        {technologies}
      </div>
    </div>
  )
}