import { Button } from "./ui/Button"
import AboutUsImage from '../assets/about_us_image.png'

export const AboutUs = () => {
  return (
    <div id="aboutUs" className="mt-64">
      <div className="flex justify-between">
        <h2 className="text-5xl font-bold font-roadRadio">О НАС</h2>
        <div className="w-[500px]">
          <h3 className="text-xl">Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</h3>
          <Button variant="secondary" className="mt-[22px]">Узнать больше</Button>
        </div>
      </div>
      <img className="my-[70px]" src={AboutUsImage} alt="About us Image" />
      <div className="flex justify-between text-black text-wrap	">
        <div className="p-6">
          <h3 className="text-5xl font-bold font-roadRadio">10,580,996</h3>
          <span className="text-xl font-medium mt-[18px]">Отправленных посылок</span>
        </div>
        <div className="p-6">
          <h3 className="text-5xl font-bold font-roadRadio">1,143,634</h3>
          <span className="text-xl font-medium mt-[18px]">Зарегистрированных покупателей</span>
        </div>
        <div className="p-6">
          <h3 className="text-5xl font-bold font-roadRadio">300,000+</h3>
          <span className="text-xl font-medium mt-[18px]">Подписчиков в соц. сетях</span>
        </div>
      </div>
    </div>
  )
}