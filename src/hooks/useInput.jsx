import React, { useState } from 'react'

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const onChange = (e) => setValue(e.target.value)
  const Input = () => <input value={value} onChange={onChange}/>
  return [value, Input]
}

export default useInput