import React, { useState }  from 'react'

export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const onChange = (e) => setValue(e.target.value)
  return {value, onChange}
}

const Input = ({ value, onChange, label }) => {
  return (
    <div>
      {label && <label style={{ marginRight: '4px' }}>{label}:</label>}
      <input value={value} onChange={onChange} />
    </div>
  )
}

export default Input