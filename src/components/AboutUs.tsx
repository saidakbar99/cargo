import { Button } from "./ui/Button"

export const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[50px] font-bold">О НАС</h2>
        <div className="w-[500px]">
          <h3 className="text-xl">Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</h3>
          <Button variant="secondary" className="mt-[22px]">Узнать больше</Button>
        </div>
      </div>
    </div>
  )
}