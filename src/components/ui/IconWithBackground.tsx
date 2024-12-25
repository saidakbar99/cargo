interface IconProps {
  icon: string;
}

export const IconWithBackground: React.FC<IconProps> = ({ icon }) => {
  return (
    <div className="min-w-[54px] h-[54px] bg-iconBackground rounded-full flex items-center justify-center">
      <img className="w-[24px] h-[24px]" src={icon} alt="Icon" />
    </div>
  );
};