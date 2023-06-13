import React, { FormEvent, useRef } from 'react'

const FormsByRef = () => {

const nameRef = useRef<HTMLInputElement>(null)
const ageRef = useRef<HTMLInputElement>(null)

const onSubmit = (event:FormEvent)=>{
    event.preventDefault()
    if(nameRef.current !== null) console.log(`name:${nameRef.current.value}`)
    if(ageRef.current !==null) console.log(`age:${ageRef.current.value}`)
    
}
  return (
    <div>
              <h1>useRef Hook , unControlled component</h1>

        <form onSubmit={onSubmit}>
            <label >First name</label>
                <input type="text" id="name" name="name" ref={nameRef} />
            <label >Age</label>
                <input type="text" id="lname" name="age" ref ={ageRef}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default FormsByRef