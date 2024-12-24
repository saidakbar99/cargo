import { useState } from 'react'
import { Button } from "./ui/Button"
import Icon from '../assets/cargo.svg'

export const Navbar = () => {
  const [selectedLanguage, setselectedLanguage] = useState('Ру')
  // const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <div className="flex justify-between h-[50px] items-center mb-[474px]">
      <img src={Icon} alt="Icon" />
      <div>
        <Button>Авторизоваться</Button>
        <Button className="mx-4">{selectedLanguage} icon</Button>
        <Button>burger</Button>
      </div>
    </div>
  )
}