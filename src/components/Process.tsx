import ProcessImage1 from '../assets/process_1.svg'
import ProcessImage2 from '../assets/process_2.svg'
import ProcessImage3 from '../assets/process_3.svg'

export const Process = () => {
  return ( 
    <div className='text-center mt-[140px]'>
      <h2 className='text-5xl font-bold text-[#222529] font-roadRadio'>Процесс работы</h2>
      <div className='flex mt-24'>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px] mb-8' src={ProcessImage1} alt="ProcessImage1" />
          <span className='text-[#222529] font-semibold text-xl font-gilroy'>Зарегистрируйтесь и получите свой адрес доставки в Turkiye.</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px] mb-8' src={ProcessImage2} alt="ProcessImage2" />
          <span className='text-[#222529] font-semibold text-xl font-gilroy'>Покупайте онлайн и используйте свои адрес доставки</span>
        </div>
        <div className='flex flex-col items-center px-4 py-[22px]'>
          <img className='w-[100px] h-[100px] mb-8' src={ProcessImage3} alt="ProcessImage3" />
          <span className='text-[#222529] font-semibold text-xl font-gilroy'>Получите свою посылку в течение 5-10 рабочих дней</span>
        </div>
      </div>
    </div>
  )
}