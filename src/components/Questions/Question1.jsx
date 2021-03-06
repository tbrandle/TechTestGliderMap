import React, { useState, useEffect } from 'react'
import { TypicodeAPI } from '../../util/ApiConstants'
import { useInput } from '../../hooks'
import { Input, Select } from '../../components/atoms'
import Api from '../../util/api'

const api = new Api({
  baseUrl: TypicodeAPI.BASE_URL
})
const Question1 = (props) => {
  const options = ['1337', '1234', '1066']

  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

  const title = useInput('')
  const body = useInput('')
  const [userId, setUserId] = useState(options[0])

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (title.length < 0) {
      setErrorMessage('You need to enter a title!')
    }
  }, [title])

  const handleSubmit = async () => {
    const params = {
      title: title.value,
      body: body.value,
      userId: userId
    }
    await api.post(TypicodeAPI.POST, params)
  }

  return (
    <div>
      <Input label='Title' {...title} />
      <Input label='Body' {...body} />

      <Select
        label='UserId'
        options={options}
        value={userId}
        onChange={setUserId}
      />

      <div>
        {errorMessage}
      </div>

      <button onClick={() => handleSubmit()} style={{ margin: 10 }}>Submit</button>
    </div>

  )
}

export default Question1
