import React, { useEffect, useState } from 'react'
// import techIcons from '@/techData'

type Props = {
  projectData:{
    id:number,
    backgroundColor:string,
    frontgroundColor:string,
    title:string,
    description:string,
    mobile:string,
    tablet:string,
    laptop:string,
    live:string,
    github:string,
    techStack:string[],
  }
}

export default function Project({projectData}: Props) {
  const [device,setDevice] = useState<'mobile' | 'tablet' | 'laptop'>('tablet')
  const {
    id,
    backgroundColor,
    frontgroundColor,
    title,
    description,
    mobile,
    tablet,
    laptop,
    live,
    github,
    techStack,
  } = projectData

  const deviceChosenStyle = {
      backgroundColor:'#603ADE',
      color:'white',
  }

  function onDeviceTogglerClickHandler(device:'mobile' | 'tablet' | 'laptop'){
    setDevice(device)
  }

  const bg = {
    backgroundImage:`url(${projectData[device]})`,
    backgroundSize:'contain',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
  }

  const techIcons = techStack.map((tech,index,techs)=>{
    return(
      <div 
        className={`flex items-center justify-center w-full h-full ${index === techs.length-1 ? '' : 'border-r-2 lg:border-b-2 lg:border-r-0'}`}
        key={index}
        >
        <div 
          style={{backgroundImage:`url(/icons/${tech}.svg)`}}
          className='techIcon w-4 h-4 sm:w-6 sm:h-6'
        >
        </div>
      </div>
    )
  })

  useEffect(()=>{
    const parent = document.querySelector("#devicesContainer") as HTMLElement

    if(!parent.style) return;
    switch(device){
      case 'laptop':
        parent.style.right = '100%'
        break;
      case 'mobile':
        parent.style.right = "0"
        break;
      case 'tablet':
        parent.style.right = "200%"
        break;
    }

  },[device])

  return (
    <div 
      style={{backgroundColor:backgroundColor}} 
      className='w-full'
    >
      <div className='general-margins py-10 sm:py-32'>
        <div className='flex rounded-2xl overflow-hidden flex-col lg:flex-row ' >

          {/* devices */}
          <div className='flex flex-col items-center bg-white2 w-full gap-8 p-8 h-128 sm:h-160 lg:flex-grow'>

            {/* toggler */}
            <div className='flex rounded-full border-2 border-purple p-0.75 items-center w-40 h-10' >
              <i 
                className="device-icons fa-solid fa-mobile-screen-button" 
                style={device === 'mobile' ? deviceChosenStyle : {}}    
                onClick={()=>onDeviceTogglerClickHandler('mobile')}
              ></i>
              <i 
                className="device-icons fa-solid fa-laptop"
                style={device === 'laptop' ? deviceChosenStyle : {}}
                onClick={()=>onDeviceTogglerClickHandler('laptop')}
              ></i>
              <i 
                className="device-icons fa-solid fa-tablet-screen-button"
                style={device === 'tablet' ? deviceChosenStyle : {}}
                onClick={()=>onDeviceTogglerClickHandler('tablet')}
              ></i>
            </div>
            
            {/* image */}
            <div 
              className='flex-grow w-full overflow-hidden'>
              <div className='flex relative h-full w-full' id='devicesContainer'>
                <div 
                  className='bg-img min-w-full h-full'
                  style={{backgroundImage:`url(${mobile})`}}
                ></div>
                <div 
                  className='bg-img min-w-full h-full'
                  style={{backgroundImage:`url(${laptop})`}}
                ></div>
                <div 
                  className='bg-img min-w-full h-full'
                  style={{backgroundImage:`url(${tablet})`}}
                ></div>
              </div>
            </div>

          </div>

          {/* info */}
          <div className='flex flex-col lg:flex-row' style={{backgroundColor:frontgroundColor}} >

            {/* title-desciption-links */}
            <div className='flex flex-col py-8 px-6 gap-6 lg:gap-4 sm:py-10 sm:px-16 lg:px-11 lg:pt-6 lg:pb-10 lg:w-80 text-center'>
              <p className='text-white2 font-bold text-2xl sm:text-3xl' >{title}</p>
              <p className='text-white2 text-sm sm:text-base' >{description}</p>
              <div>
                <a className='live-github mb-4' target='_blank' href={live}>
                  Live
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a className='live-github' target='_blank' href={github}>
                  GITHUB
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            {/* techStack */}
            <div className='flex border-t-2 border-t-white h-10 sm:h-14 lg:flex-col lg:h-full lg:w-12 lg:border-t-0 lg:border-l-2'>
              {techIcons}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}