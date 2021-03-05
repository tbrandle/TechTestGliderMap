import React, { useState, useEffect } from 'react';
import Input, { useInput } from '../components/Input'
import Select from '../components/Select'
import Api from '../util/api'

const api = new Api({ 
  baseUrl: 'https://jsonplaceholder.typicode.com'
})

const Question1 = (props) => {

  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

  const title = useInput('')
  const body = useInput('')
  //TODO: this wont capture initial value of a select
  const userId = useInput()

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (title.length < 0) {
      setErrorMessage('You need to enter a title!')
    }
  }, [title]);

  const handleSubmit = async () => {
    const params = {
        title: title.value ,
        body: body.value ,
        userId: userId.value
      }
    const response = await api.post('posts', params)    
  }

  return (
    <div>
      <Input label={'Title'} {...title}/>
      <Input label={'Body'} {...body}/>

      <Select label={'UserId'} {...userId}>
        <option>1337</option>
        <option>1234</option>
        <option>1066</option>
      </Select>

      <div>
        {errorMessage}
      </div>

      <button onClick={() => handleSubmit()} style={{margin: 10}}>Submit</button>
    </div>

  )
}

export default Question1