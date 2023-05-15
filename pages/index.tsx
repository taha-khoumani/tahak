import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 lg:gap-24">
      <Head>
        <title>Taha K</title>
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}
