import React from 'react'

const Input = ({ value, onChange, label }) => {
  return (
    <div>
      {label && <label style={{ marginRight: '4px' }}>{label}:</label>}
      <input value={value} onChange={onChange} />
    </div>
  )
}

export default Input
