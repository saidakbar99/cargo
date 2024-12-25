export interface BenefitsItemProps {
  headerText: string;
  text: string;
  icon: string;
}

export const BenefitsItem: React.FC<BenefitsItemProps> = ({headerText, text, icon}) => {
  return (
    <div className='flex w-[364px] p-4'>
      <div className="min-w-[54px] h-[54px] bg-iconBackground rounded-full flex items-center justify-center">
        <img className="w-[24px] h-[24px]" src={icon} alt="Icon" />
      </div>
      <div className="ml-[20px]">
        <h4 className='text-xl font-semibold'>{headerText}</h4>
        <span className='text-gray mt-2'>{text}</span>
      </div>
    </div>
  )
}