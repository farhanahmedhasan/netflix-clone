import React from 'react'

const Button = (props) => {
  if (props.icon) {
    return (
      <button className={`${props.className} py-[10px] px-[20px] text-lg font-medium rounded-md flex items-center space-x-2 cursor-pointer`}>
        {props.icon}
        <span>{props.text}</span>
      </button>
    )}
}

export default Button