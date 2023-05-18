import logo from "@/public/tahak.png"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

export default function Navbar({}: Props) {
  const [isMenuOpen,toggleMenu] = useState(false)


  function toggleMenuState(){
    toggleMenuUI(isMenuOpen)
    toggleMenu((prev)=>!prev)
  }
  function toggleMenuUI(state:boolean){
    let menuParent = document.getElementById('menuParent')
    let menuChild = document.getElementById('menuChild')
    if(!menuParent || !menuChild) return;

    if(state){ //want to close
      menuParent.style.animationName = 'close-menuParent';
      menuChild.style.animationName = 'close-menuChild';
      setTimeout(()=>menuParent?.classList.add('hidden'),300)
    }else{ //want to open
      menuParent.style.animationName = 'open-menuParent';
      menuChild.style.animationName = 'open-menuChild';
      menuParent.classList.remove('hidden')
    }
  }

  return (
    <div className=" relative">
      <div className="mt-6 flex items-center justify-between pb-6 bottom-split mx-4 sm:mx-16 lg:mx-24 sm:border-none sm:pb-3 lg:border-solid lg:pb-7 lg:mt-7">
        {/* only mobile */}
          <i 
            className="fa-bars fa-solid text-black cursor-pointer hover:text-opacity-60 transition-colors text-4xl sm:hidden"
            onClick={toggleMenuState}
          ></i>

        {/* all */}
          <div className="flex items-center gap-2 sm:gap-2">
              <p className="text-black font-bold text-4xl sm:text-5xl sm:tracking-widest">TK</p>
              <Image className="h-9 w-10 sm:h-11 sm:w-12" src={logo} alt={'logo'} ></Image>
          </div>

        {/* Desktop only */}
          <div className="hidden lg:flex gap-8 justify-between">
            <a className="nav-text">About</a>
            <a className="nav-text">Tech Stack</a>
            <a className="nav-text">Contact</a>
            <a className="nav-text">Websites</a>
          </div>
        
        {/* all */}
          <button className="btn gap-3 py-2 px-4 lg:px-5" >
              <span className="hidden sm:inline font-medium">Let’s network</span>
              <i className="fa-regular fa-comments text-lg "></i>
          </button>
      </div>
      {/* only mobile */}
        <div 
          className={`h-0 overflow-hidden bg-black bg-opacity-75  right-0 left-0 absolute hidden sm:hidden`} 
          id="menuParent"
          onClick={toggleMenuState}
        >
          <div className="bg-white1 px-6 overflow-hidden" id="menuChild" onClick={(e)=>e.stopPropagation()}>
            <div className="pb-6">
              <div className="flex flex-col items-center gap-6 py-6 bottom-split">
                  <a onClick={toggleMenuState} className="nav-text">About</a>
                  <a onClick={toggleMenuState} className="nav-text">Tech Stack</a>
                  <a onClick={toggleMenuState} className="nav-text">Contact</a>
                  <a onClick={toggleMenuState} className="nav-text">Websites</a>
              </div>
            </div>
          </div>
        </div>
      {/* tablet and desktop */}
        <div className="hidden sm:flex justify-around items-center py-4 sm:mx-16 lg:hidden">
          <div className="nav-text-2-Parent"><a className="nav-text-2-Child">About</a></div>
          <div className="nav-text-2-Parent"><a className="nav-text-2-Child">Tech Stack</a></div>
          <div className="nav-text-2-Parent"><a className="nav-text-2-Child">Contact</a></div>
          <div className="nav-text-2-Parent right-split"><a className="nav-text-2-Child">Websites</a></div>
        </div>
    </div>
  )
}
