import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Hero />
    </div>
  )
}
