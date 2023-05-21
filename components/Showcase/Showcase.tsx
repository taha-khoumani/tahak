import React from 'react'
import Project from './Project'
import projectsData from "@/lib/data"

type Props = {}

export default function Showcase({}: Props) {
  const Projects = projectsData.projects.map(
    project=> <Project projectData={project} key={project.id} /> 
  )

  return (
    <div id='websites'>
        <div className='general-margins text-center mb-10 sm:mb-20'>
            <h2 className='headings'>Portfolio Showcase</h2>
            <p className='sub-headings'>Check Out These Impressive Websites I've Built!</p>
        </div>
        <div>
            {Projects}
        </div>
    </div>
  )
}