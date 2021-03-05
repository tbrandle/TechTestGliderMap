import React, { useState } from 'react';
import SearchFilter from '../components/SearchFilter'


const Question2 = (props) => {

  // Situation: Create a search bar that filters items in the list as the user types.
  // Feel free to refactor as you feel necessary.

  const shoppingList = [
    'Peanut Butter',
    'Peas',
    'Butter',
    'Beans',
    'Eggs',
    'Quiche',
    'Cheese'
  ]

  return (
    <div>
      <SearchFilter list={shoppingList}/>
    </div>
  )
}

export default Question2