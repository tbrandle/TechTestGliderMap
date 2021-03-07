import React from 'react'
import '../../styles/Input.scss'

const Input = ({ value, onChange, label }) => {
  return (
    <div className='input-atom'>
      {label && <label className='label-atom'>{label}:</label>}
      <input aria-label={label} value={value} onChange={onChange} />
    </div>
  )
}

export default Input
