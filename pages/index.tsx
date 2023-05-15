import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Head>
        <title>Taha K</title>
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}
