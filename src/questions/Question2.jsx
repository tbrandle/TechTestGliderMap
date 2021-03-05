import React from 'react';
import Input, { useInput } from '../components/Input'


const Question2 = (props) => {

  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.

  const searchText = useInput('')

  const shoppingList = [
    'Peanut Butter',
    'Peas',
    'Butter',
    'Beans',
    'Eggs',
    'Quiche',
    'Cheese'
  ]

  const handleSearchTextChange = () => {

  }

  return (
    <div>
      <Input {...searchText}/>
      {shoppingList.map(item => {
        return (
          <div>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default Question2