import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import TechStack from "@/components/TechStack"
import Separator from "@/components/Separator"
import Showcase from "@/components/Showcase/Showcase"
import Head from "next/head"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function Home() {
  
  return (
    <div className="bg-white1 flex flex-col gap-10 sm:gap-16 lg:gap-24">
      <Head>
        <title>Taha K</title>
      </Head>
      <Navbar />
      <Hero />
      <Separator />
      <Showcase />
      <TechStack />
      <Separator />
      <Contact />
    </div>
  )
}
