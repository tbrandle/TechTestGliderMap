import React from 'react'

const Select = ({ value, onChange, label, children }) => {
  return (
    <div>
      {label && <label style={{ marginRight: '4px' }}>{label}:</label>}
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  )
}

export default Select