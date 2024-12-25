import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-lightGray font-semibold rounded-lg w-full py-3 px-4 cursor-pointer bg-white flex justify-between items-center"
      >
        <span>{selectedOption || placeholder}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-lightGray rounded-lg shadow-md max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
