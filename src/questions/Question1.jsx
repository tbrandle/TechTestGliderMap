import React, { useState, useEffect } from 'react';
import Input from '../components/Input'
import Select from '../components/Select'
import useInput from '../hooks/useInput'

const Question1 = (props) => {

  // Situation: The TestForm component was written by a junior developer who needs some help getting it to function.
  // Please modify the TestForm component such that it will correctly use hooks to validate and post to the endpoint.
  // Feel free to use any (or no) external libraries you feel appropriate.
  // Endpoint docs: https://jsonplaceholder.typicode.com/guide/

  const title = useInput('')
  const body = useInput('')
  const userId = useInput()
  
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (title.length < 0) {
      setErrorMessage('You need to enter a title!')
    }
  }, [title]);

  const handleSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'post',
      data: JSON.toString({
        title: title.value ,
        body: body.value ,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json))
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

      <button onClick={handleSubmit()} style={{margin: 10}}>Submit</button>
    </div>

  )
}

export default Question1