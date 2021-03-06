import React, { useState } from 'react'
import Input from './Input'
import { useInput } from '../../hooks'

const SearchFilter = ({ list }) => {
 
  const { value: searchText, onChange } = useInput('')
  const [filteredList, setFilteredList] = useState(list)

  const handleSearchTextChange = (e) => {
    const filteredList = list.filter((item) => item.match(e.target.value))
    setFilteredList(filteredList)
    onChange(e)
  }

  return (
    <div>
      <Input value={searchText} onChange={handleSearchTextChange}/>
      {filteredList.map((item, i) => {
        return (
          <div key={i}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default SearchFilter