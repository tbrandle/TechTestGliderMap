import React, { useState } from 'react'
import './App.css'
import Notifications from './components/Notifications'
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
      <div style={{ margin: 20 }}>
        {questions.map((question, index) => <button key={index} onClick={() => setCurrentQuestionIndex(index)}>{question}</button>)}
      </div>
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        {renderQuestion()}
      </div>
    </div>
  )
}

export default App
