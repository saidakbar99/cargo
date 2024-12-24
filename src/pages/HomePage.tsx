import { AboutUs } from "../components/AboutUs"
import { Footer } from "../components/Footer"
import { HeroText } from "../components/HeroText"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {
  return (
    <div className="hero-background pt-9">
      <div className="mx-auto w-[1140px]">
        <Navbar />
        <HeroText />
        <div className="mt-64">
          <AboutUs />
        </div>
        <Footer />
      </div>
    </div>
  )
}