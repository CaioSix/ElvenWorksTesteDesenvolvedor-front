import React from 'react';

interface ButtonProps {
  text: string;  
  bgColor?: string; 
  textColor?: string; 
  borderColor?: string; 
}

const Button: React.FC<ButtonProps> = ({
  text,  
  bgColor = 'bg-green-600',
  textColor = 'text-white',
  borderColor = 'border-transparent',
}) => {
  return (
    <a
      
      className={`inline-block px-5 py-2 font-bold text-base rounded-md border transition transform hover:scale-105 focus:outline focus:outline-2 ${bgColor} ${textColor} ${borderColor} hover:brightness-90 focus:outline-offset-2`}

    >
      {text}
    </a>
  );
};

export default Button;
