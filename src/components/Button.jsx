import React from 'react'

const Button = ({onChange,text}) => {
  return (
   <button onClick={(e)=>onChange(e)}>{text}</button>
  )
}

export default Button