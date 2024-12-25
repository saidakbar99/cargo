import ProcessIcon1 from '../assets/process_1.svg'
import ProcessIcon2 from '../assets/process_2.svg'
import ProcessIcon3 from '../assets/process_3.svg'

export const Process = () => {
  return ( 
    <div className='text-center mt-[140px] text-black'>
      <h2 className='text-5xl font-bold font-roadRadio'>Процесс работы</h2>
      <div className='flex mt-24'>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px]' src={ProcessIcon1} alt="ProcessIcon1" />
          <span className='font-semibold text-xl mt-8'>Зарегистрируйтесь и получите свой адрес доставки в Turkiye.</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px]' src={ProcessIcon2} alt="ProcessIcon2" />
          <span className='font-semibold text-xl mt-8'>Покупайте онлайн и используйте свои адрес доставки</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px]' src={ProcessIcon3} alt="ProcessIcon3" />
          <span className='font-semibold text-xl mt-8'>Получите свою посылку в течение 5-10 рабочих дней</span>
        </div>
      </div>
    </div>
  )
}