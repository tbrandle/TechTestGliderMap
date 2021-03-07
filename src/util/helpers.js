import notifier from './notifier'
import moment from 'moment'

export const validateObject = (obj) => {
  const keys = Object.keys(obj)
  const invalidArr = [undefined, '', null]
  const invalidKey = keys.find((key) => invalidArr.includes(obj[key]))
  invalidKey && notifier.emit('notify', {message: `Please enter a value for ${invalidKey}`, type: 'error'})

  return invalidKey
}

export const isDate = (val) => { 
  if(val) {
    const matchDateString = val.toString().match(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T(2[0-3]|[01][0-9]):[0-5][0-9]/)
    console.log('### isDate', val, matchDateString)
    return  matchDateString ? true : false
  } 

}