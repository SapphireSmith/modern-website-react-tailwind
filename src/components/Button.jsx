import React from 'react'

const Button = ({style}) => {
  return (
    <button type='submit' className={`py-4 sm: px-6 bg-blue-gradient
    font-poppins font-medium text-[18px] text-primary outline-none
     rounded-md ${style}`}>
      Get Started
    </button>
  )
}

export default Button