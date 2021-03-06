import React from 'react'

const Select = ({ value, options = [], onChange, label }) => {
  return (
    <div>
      {label && <label style={{ marginRight: '4px' }}>{label}:</label>}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((item, i) => <option value={item} key={i}>{item}</option>)}
      </select>
    </div>
  )
}

export default Select