import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button className="grow-1 bg-light text-sm  font-bold leading-6 text-white py-3 px-5 rounded-2xl" {...props}>{children}</button>
  )
}

export default Button