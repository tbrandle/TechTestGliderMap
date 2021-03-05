import React, { useState } from 'react'
import Input, { useInput } from './Input'

const SearchFilter = ({ list }) => {
 
  const { value: searchText, onChange } = useInput('')
  const [listItems, setListItems] = useState(list)

  const handleSearchTextChange = (e) => {
    const filteredList = list.filter((item) => item.match(e.target.value))
    setListItems(filteredList)
    onChange(e)
  }

  return (
    <div>
      <Input value={searchText} onChange={handleSearchTextChange}/>
      {listItems.map((item, i) => {
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