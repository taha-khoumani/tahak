import React, { useEffect, useState } from 'react'

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

  function onScroll (direction:string){
    const navigaterParent = document.querySelector(`#devicesGrandContainer${id}`) as any
    const navigater = document.querySelector(`#devicesContainer${id}`) as HTMLElement
    const currentPosition = window.getComputedStyle(navigater).right
    const width = navigaterParent.offsetWidth

    let initialPosition;
    if(currentPosition === "0px"){
      initialPosition = "mobile"
    } else if(currentPosition === `${width}px`){
      initialPosition = "laptop"
    } else {
      initialPosition = "tablet"
    }

    let to:"laptop" | 'tablet' | 'mobile';
                   
    if(direction === "l"){
      switch (initialPosition){
        case "mobile": 
          to = "laptop"
        break;
        case "laptop":
          to = "tablet"
        break;
        case "tablet":
          to = "tablet"
        break;
      }
    }
    else{
      switch (initialPosition){
        case "mobile": 
          to = "mobile"
        break;
        case "laptop":
          to = "mobile"
        break;
        case "tablet":
          to = "laptop"
        break;
      }
    }

    setDevice(to)

  }

  useEffect(()=>{
    //toggler
    const togglerParent = document.querySelector(`#togglerParent${id}`) as HTMLElement
    const togglerChild = document.querySelector(`#togglerChild${id}`) as HTMLElement
    
    if(!togglerParent.style) return;

    let togglerParentStyle = togglerParent.style
    let togglerChildStyle = togglerChild.style

    const togglerAnimationDuration = 100

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
    const parent = document.querySelector(`#devicesContainer${id}`) as HTMLElement

    if(!parent.style) return;
    const imgAnimationDuration = 200

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

  //mobile scoll
  useEffect(()=>{
    // mobile-scrolling-event-listener
    (function(d) {
      // based on original source: https://stackoverflow.com/a/17567696/334451
      var newEvent = function(e, name) {
          // This style is already deprecated but very well supported in real world: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/initCustomEvent
          // in future we want to use CustomEvent function: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
          var a = document.createEvent("CustomEvent");
          a.initCustomEvent(name, true, true, e.target);
          e.target.dispatchEvent(a);
          a = null;
          return false
      };
      var debug = false; // emit info to JS console for all touch events?
      var active = false; // flag to tell if touchend should complete the gesture
      var min_gesture_length = 20; // minimum gesture length in pixels
      var tolerance = 0.3; // value 0 means pixel perfect movement up or down/left or right is required, 0.5 or more means any diagonal will do, values between can be tweaked
  
      var sp = { x: 0, y: 0, px: 0, py: 0 }; // start point
      var ep = { x: 0, y: 0, px: 0, py: 0 }; // end point
      var touch = {
          touchstart: function(e) {
              active = true;
              var t = e.touches[0];
              sp = { x: t.screenX, y: t.screenY, px: t.pageX, py: t.pageY };
              ep = sp; // make sure we have a sensible end poin in case next event is touchend
              debug && ("start", sp);
          },
          touchmove: function(e) {
              if (e.touches.length > 1) {
                  active = false;
                  debug && console.log("aborting gesture because multiple touches detected");
                  return;
              }
              var t = e.touches[0];
              ep = { x: t.screenX, y: t.screenY, px: t.pageX, py: t.pageY };
              debug && console.log("move", ep, sp);
          },
          touchend: function(e) {
              if (!active)
                  return;
              debug && console.log("end", ep, sp);
              var dx = Math.abs(ep.x - sp.x);
              var dy = Math.abs(ep.y - sp.y);
  
              if (Math.max(dx, dy) < min_gesture_length) {
                  debug && console.log("ignoring short gesture");
                  return; // too short gesture, ignore
              }
  
              if (dy > dx && dx/dy < tolerance && Math.abs(sp.py - ep.py) > min_gesture_length) { // up or down, ignore if page scrolled with touch
                  newEvent(e, (ep.y - sp.y < 0 ? 'gesture-up' : 'gesture-down'));
                  //e.cancelable && e.preventDefault();
              }
              else if (dx > dy && dy/dx < tolerance && Math.abs(sp.px - ep.px) > min_gesture_length) { // left or right, ignore if page scrolled with touch
                  newEvent(e, (ep.x - sp.x < 0 ? 'gesture-left' : 'gesture-right'));
                  //e.cancelable && e.preventDefault();
              }
              else {
                  debug && console.log("ignoring diagonal gesture or scrolled content");
              }
              active = false;
          },
          touchcancel: function(e) {
              debug && console.log("cancelling gesture");
              active = false;
          }
      };
      for (var a in touch) {
          d.addEventListener(a, touch[a], false);
          // TODO: MSIE touch support: https://github.com/CamHenlin/TouchPolyfill
      }
    })(window.document);

    //config
    const navigater = document.querySelector(`#devicesGrandContainer${id}`) as HTMLElement
  
    function gestureRightHandler () {onScroll("r")} 
    function gestureLeftHandler () {onScroll("l")}

    navigater.addEventListener('gesture-right',gestureRightHandler)
    navigater.addEventListener('gesture-left',gestureLeftHandler)
  },[device])

  return (
    <div 
      style={{background:backgroundColor}} 
      className='w-full'
    >
      <div className='general-margins py-10 sm:py-32'>
        <div className='flex rounded-2xl overflow-hidden flex-col lg:flex-row ' >

          {/* devices */}
          <div className='flex flex-col items-center bg-white2 w-full gap-8 p-8 h-128 sm:h-160 lg:h-192  lg:flex-grow' id='devices'>

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
              <div className='absolute inset-y-0.75 w-xxxsm inset-x-50 bg-purple rounded-full overflow-hidden togglerParent' id={`togglerParent${id}`}> {/* 50px width with purple bg */}
                <div className='flex items-center h-full relative togglerChild' id={`togglerChild${id}`} >
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
              className='flex-grow w-full overflow-hidden' id={`devicesGrandContainer${id}`}>
              <div className='flex relative h-full w-full devicesContainer' id={`devicesContainer${id}`}>
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
            <div className='flex justify-between flex-col py-8 px-6 gap-6 lg:gap-4 sm:py-10 sm:px-16 lg:px-11 lg:pt-6 lg:pb-10 lg:w-80 text-center'>
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