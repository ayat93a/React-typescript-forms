import React, { FormEvent} from 'react'

interface Props {
    formhandler :  { name: string; age: number } ,
    setFormHandler:(newFormHandler: { name: string; age: number }) => void;
    onSubmit : (e:FormEvent) => void
}

const FormByState = ({formhandler , setFormHandler , onSubmit}:Props) => {

  return (
    <div>
              <h1>useState Hook , controlled component</h1>

        <form onSubmit={onSubmit}>
            <label >First name</label>
                <input type="text" id="name" name="name" onBlur={(e)=>{setFormHandler({...formhandler, name: e.target.value})}} />
            <label >Age</label>
                <input type="text" id="lname" name="age"onBlur={(e)=>{setFormHandler({...formhandler , age :parseInt(e.target.value) })}}/>
            <input type="submit" value="Submit"/>
        </form> 
    </div>
  )
}

export default FormByState