import React, { useEffect, useState } from 'react'

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
    }, 2500)
  }, [message])

  return (
    <div id='notifier' className={type}>
      {message}
    </div>
  )
}

export default Notifications
