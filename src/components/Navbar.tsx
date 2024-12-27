import { useState } from 'react'
import { Button } from "./ui/Button"
import Icon from '../assets/cargo.svg'
import BurgerIcon from '../assets/burger_icon.svg'
import Dropdown from "./ui/Dropdown"
import { scrollToSection } from '../utils'

const languages = ["Ру", "Уз", "Uz", "En"]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (id: string) => {
    scrollToSection(id, 50)
    setIsMenuOpen(false)
  }

  return (
    <div className="flex justify-between h-[50px] items-center">
      <img src={Icon} alt="Icon" />
      <div className="flex">
        <Button className="mr-4">Авторизоваться</Button>
        <Dropdown variant="blurred" options={languages} />
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Button className="ml-4 w-[70px]">
            <img className="min-w-[22px] h-[22px]" src={BurgerIcon} alt="Burger Icon" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[rgba(6,6,6,0.8)] backdrop-blur-sm flex flex-col justify-start items-center z-50"
        >
          <button
            className="absolute top-12 right-40 text-white text-3xl font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="mt-52 text-center text-4xl font-semibold text-white">
            <li className="mb-7">
              <button onClick={() => handleScroll("aboutUs")}>О нас</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("process")}>Процесс работы</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("benefits")}>Наши преимущества</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("stores")}>Лучшие магазины</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("calculator")}>Калькулятор</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("faq")}>Часто задаваемые вопросы</button>
            </li>
            <li className="mb-7">
              <button onClick={() => handleScroll("contactUs")}>Связаться с нами</button>
            </li>
          </ul>
        </div>
      )}
    </div>
    
  )
}