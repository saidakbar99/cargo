import { AboutUs } from "../components/AboutUs"
import { Banner } from "../components/Banner"
import { Footer } from "../components/Footer"
import { HeroText } from "../components/HeroText"
import { Navbar } from "../components/Navbar"
import { Process } from "../components/Process"

export const HomePage = () => {
  return (
    <div className="hero-background pt-9">
      <div className="mx-auto w-[1140px]">
        <Navbar />
        <HeroText />
        <AboutUs />
        <Process />
      </div>
      <div className="banner-background mt-[140px]">
        <Banner />
      </div>
      <div className="mx-auto w-[1140px]">

      </div>
      <Footer />
    </div>
  )
}