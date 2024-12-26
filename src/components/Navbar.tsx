import { useState } from 'react'
import { Button } from "./ui/Button"
import Icon from '../assets/cargo.svg'
import BurgerIcon from '../assets/burger_icon.svg'
import Dropdown from "./ui/Dropdown"

const languages = ["Ру", "Уз", "Uz", "En"]

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <div className="flex justify-between h-[50px] items-center">
      <img src={Icon} alt="Icon" />
      <div className="flex">
        <Button className="mr-4">Авторизоваться</Button>
        <Dropdown variant="blurred" options={languages} />
        <div onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <Button className="ml-4 w-[70px]">
            <img className="min-w-[22px] h-[22px]" src={BurgerIcon} alt="Burger Icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}