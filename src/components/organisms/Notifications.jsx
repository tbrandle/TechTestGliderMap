import React, { useEffect, useState } from 'react'
import '../../styles/Notifications.scss'

import notifier from '../../util/notifier'

const Notifications = (props) => {
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  const clearMessage = () => {
    setMessage('')
    setType('')
  }
  const notify = ({ message, type }) => {
    setMessage(message)
    setType(type)

    setTimeout(() => {
      clearMessage()
    }, 4000)
  }

  useEffect(() => {
    notifier.on('notify', notify)
    return () => notifier.removeListener('notify', notify)
  }, [])

  return (
    <div className='notifications'>
      <div className={type}>
        {message}
      </div>
    </div>
  )
}

export default Notifications
