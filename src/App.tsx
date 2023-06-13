import React, { FormEvent, useState } from 'react'
import FormByState from './FormByState'
import FormsByRef from './FormsByRef'
import FormByFormHook from './FormByFormHook'
import FormByFormHookZodValidation from './FormByFormHookZodValidation'

const App = () => {
  const [formhandler,setFormHandler] = useState({
    name : " " , 
    age : 0 
})
const onSubmit = (event : FormEvent) => {
    event.preventDefault()
    console.log(formhandler)

}
  return (
    <div>
      <FormByState formhandler={formhandler} setFormHandler={setFormHandler}  onSubmit={onSubmit} />
      <FormsByRef />
      <FormByFormHook />
      <FormByFormHookZodValidation />
    </div>
  )
}

export default App