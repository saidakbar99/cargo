interface IconProps {
  icon: string;
}

export const BenefitsIcon: React.FC<IconProps> = ({ icon }) => {
  return (
    <div className="w-[54px] h-[54px] bg-[#FFF0E8] rounded-full flex items-center justify-center">
      <img className="w-[34px] h-[34px]" src={icon} alt="Icon" />
    </div>
  );
};