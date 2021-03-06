import React, { useEffect, useState } from 'react'
import '../styles/Notifications.scss'

import notifier from '../util/notifier'

const Notifications = (props) => {
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  const notify = ({ message, type }) => {
    setMessage(message)
    setType(type)
  }

  useEffect(() => {
    notifier.on('notify', notify)
    return () => notifier.off()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setMessage('')
      setType('')
    }, 4000)
  }, [message])

  return (
    <div className='notifications'>
      <div className={type}>
        {message}
      </div>
    </div>
  )
}

export default Notifications
