import BenefitsIcon1 from '../assets/benefits_1.svg'
import BenefitsIcon2 from '../assets/benefits_2.svg'
import BenefitsIcon3 from '../assets/benefits_3.svg'
import BenefitsIcon4 from '../assets/benefits_4.svg'
import BenefitsIcon5 from '../assets/benefits_5.svg'
import BenefitsIcon6 from '../assets/benefits_6.svg'
import { BenefitsIcon } from './ui/BenefitsIcon'

export const Benefits = () => {
  return (
    <div className="mt-[140px] text-[#222529]">
      <h2 className="text-center font-roadRadio font-bold text-5xl">наши преимущества</h2>

      <div className="font-gilroy flex ">
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon1} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon2} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon3} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon4} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon5} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon6} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
        <div className='flex'>
          <BenefitsIcon icon={BenefitsIcon6} />
          <div>
            <h4 className='text-xl font-semibold'>Инновационный сервис-центр</h4>
            <span className='text-[#898989]'>Наши инновационные технологии в сервис-центре позволяют Вам получать посылки по баркоду всего за 10 секунд. Мы ценим Ваше время!</span>
          </div>
        </div>
      </div>
    </div>
  )
}
