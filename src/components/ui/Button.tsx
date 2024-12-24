interface ButtonProps {
  variant?: "orange" | "blurred" | "secondary";
  text?: string;
  children?: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "blurred",
  className = "",
  children,
  handleClick,
  text,
}) => {
  const getButtonStyles = (variant: string) => {
    switch (variant) {
      case "blurred":
        return "bg-white/25 backdrop-blur-[21px] py-[14px] px-6";
      case "orange":
        return "bg-[#FB7C0E] text-xl px-[30px] py-5";
      case "secondary":
        return "border border-[#FB7C0E] text-[#FB7C0E] px-[30px] py-5";
    }
  };

  const baseStyles = "rounded-[80px] text-center font-semibold text-white items-center";
  const variantStyles = getButtonStyles(variant);

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {text || children}
    </button>
  )
}