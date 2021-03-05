import { useEffect } from 'react'
import React, { useState } from 'react'
import eventEmitter from '../util/eventEmitter'

const Notifications = (props) => {
  eventEmitter.on('notify', notify)
  
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  
  const notify = ({ message, type }) => {
    setMessage(message)
    setType(type)
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage('')
      setType('')
    }, 2500)
  }, [message])

  return (
    <div id={'notifier'} className={type}>
      {message}
    </div>
  )

}

export default Notifications