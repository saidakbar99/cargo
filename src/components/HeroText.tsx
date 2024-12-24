import { Button } from "./ui/Button"

export const HeroText = () => {
  return (
    <div className="flex gap-[100px]">
      <h1 className="text-6xl text-white font-semibold w-1/2">Из Турции к вам домой — просто и быстро!</h1>
      <div className="w-1/2">
        <h3 className="text-xl text-white">Мы поможем сопроводить сделку на покупку складов, от момента просмотра до получения ключей и полного пакета документов</h3>
        <Button variant="orange" className="mt-[22px]">Начать покупку</Button>
      </div>
    </div>
  )
}