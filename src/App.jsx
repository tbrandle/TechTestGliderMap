import React, { useState } from 'react'
import './styles/App.scss'
import { Notifications } from './components/organisms'
import { Button } from './components/atoms'
import {
  Question1,
  Question2,
  Question3
} from './components/Questions'

function App () {
  const questions = [
    'Question1',
    'Question2',
    'Question3'
  ]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const renderQuestion = () => {
    switch (currentQuestionIndex) {
      case 0:
        return (
          <Question1 />
        )
      case 1:
        return (
          <Question2 />
        )
      case 2:
        return (
          <Question3 />
        )
      default:
        return (
          <Question1 />
        )
    }
  }

  return (
    <div className='App'>
      <Notifications />
      <div className='button-container'>
        {questions.map((question, index) => <Button key={index} onClick={() => setCurrentQuestionIndex(index)}>{question}</Button>)}
      </div>
      <div className='question-container'>
        {renderQuestion()}
      </div>
    </div>
  )
}

export default App
