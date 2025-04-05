import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export interface Option {
  id: string;
  label?: string;
  component?: JSX.Element;
  action?: () => void;
  icon?: JSX.Element;
}
interface DropdownProps {
  options: Option[];
  placeholder: JSX.Element;
}

const Dropdown = ({ options, placeholder }: DropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex justify-between items-center text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        {placeholder}
        <HiChevronDown
          className={`ml-2 h-5 w-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={option.action}
                className="inline-flex justify-between block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                {option.icon ?? <span className="sr-only">{option.icon}</span>}
                {option.label ?? (
                  <span className="sr-only">{option.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
