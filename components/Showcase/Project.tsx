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
  const [device,setDevice] = useState<'mobile' | 'tablet' | 'laptop'>('laptop')
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
    //toggler
    const togglerParent = document.querySelector('#togglerParent') as HTMLElement
    const togglerChild = document.querySelector('#togglerChild') as HTMLElement
    
    if(!togglerParent.style) return;

    let togglerParentStyle = togglerParent.style
    let togglerChildStyle = togglerChild.style

    const togglerAnimationDuration = 300

    switch(device){
      case 'laptop':
        //PARENT
        togglerParent.style.animationName = 'laptopIconP'
        setTimeout(()=>{
          togglerParentStyle.left="53px";
          togglerParentStyle.right="53px"
        },togglerAnimationDuration)

        //CHILD
        togglerChild.style.animationName = 'laptopIconC'
        setTimeout(()=>{
          togglerChildStyle.right="50px"
        },togglerAnimationDuration)

        break;

      case 'mobile':
        // PARENT
        togglerParent.style.animationName = 'mobileIconP'
        setTimeout(()=>{
          togglerParentStyle.left="3px";
          togglerParentStyle.right="103px"
        },togglerAnimationDuration)

        //CHILD
        togglerChild.style.animationName = 'mobileIconC'
        setTimeout(()=>{
          togglerChildStyle.right="0px"
        },togglerAnimationDuration)

        break;

      case 'tablet':
        // PARENT
        togglerParent.style.animationName = 'tabletIconP'
        setTimeout(()=>{
          togglerParentStyle.left="103px";
          togglerParentStyle.right="3px"
        },togglerAnimationDuration)

        //CHILD
        togglerChild.style.animationName = 'tabletIconC'
        setTimeout(()=>{
          togglerChildStyle.right="100px"
        },togglerAnimationDuration)

        break;

    }


    //images
    const parent = document.querySelector("#devicesContainer") as HTMLElement

    if(!parent.style) return;
    const imgAnimationDuration = 450

    switch(device){
      case 'laptop':
        parent.style.animationName = 'laptop'
        setTimeout(()=>parent.style.right ='100%',imgAnimationDuration)
        break;
      case 'mobile':
        parent.style.animationName = 'mobile'
        setTimeout(()=>parent.style.right ='0%',imgAnimationDuration)
        break;
      case 'tablet':
        parent.style.animationName = 'tablet'
        setTimeout(()=>parent.style.right ='200%',imgAnimationDuration)
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
            <div 
              className='relative rounded-full border-2 border-purple p-0.75 w-40 h-10' 
            >

              {/* back-icons */}
              <div className='flex items-center h-full' >
                  <i 
                    className="back-device-icons fa-solid fa-mobile-screen-button"   
                    onClick={()=>onDeviceTogglerClickHandler('mobile')}
                  ></i>
                  <i 
                    className="back-device-icons fa-solid fa-laptop"
                    onClick={()=>onDeviceTogglerClickHandler('laptop')}
                  ></i>
                  <i 
                    className="back-device-icons fa-solid fa-tablet-screen-button"
                    onClick={()=>onDeviceTogglerClickHandler('tablet')}
                  ></i>
              </div>

              {/* front-icons */}
              <div className='absolute inset-y-0.75 w-xxxsm inset-x-50 bg-purple rounded-full overflow-hidden' id='togglerParent'> {/* 50px width with purple bg */}
                <div className='flex items-center h-full relative' id='togglerChild' >
                  <i 
                    className="front-device-icons fa-solid fa-mobile-screen-button"  
                  ></i>
                  <i 
                    className="front-device-icons fa-solid fa-laptop"
                  ></i>
                  <i 
                    className="front-device-icons fa-solid fa-tablet-screen-button"
                  ></i>
                </div>
              </div>            

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