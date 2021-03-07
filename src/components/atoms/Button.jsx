import React from 'react'
import '../../styles/Button.scss'


const Button = ({ children, ...props }) => {
  return (
    <button className={'button-atom'} {...props}>{children}</button>
  )
}

export default Button
