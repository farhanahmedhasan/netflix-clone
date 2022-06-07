import React from 'react'

const Button = ({icon,text,className}) => {
  if (icon) {
    return (
      <button className={`${className} py-[10px] px-[20px] text-lg font-medium rounded-md flex items-center space-x-2 cursor-pointer`}>
        {icon}
        <span>{text}</span>
      </button>
    )}
}

export default Button