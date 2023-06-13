import React, { FormEvent } from 'react'
import {FieldValues, useForm} from 'react-hook-form'


interface FormData {
  name : string,
  age : number
}
//npm i react-hook-form
const FormByFormHook = () => {

    const {register , handleSubmit , formState : {errors , isValid}} = useForm<FormData>()
    const handleRegistration  = (data : FieldValues ) =>{ 
      console.log(data)}
  return (
    <div>
      <h1>Form Hook </h1>
      <p>min length for name is 3 </p>

         <div>
        <form onSubmit={handleSubmit(handleRegistration)}>
            <label >First name</label>
                <input {...register("name" , {required: "Name is required" , minLength:3})} type="text" id="name" name="name"  />
                {errors.name?.type == 'required' && <p>Name is required</p>}
                {errors.name?.type=="minLength" && <p>Min length for name is 3 charchters</p>}
            <label >Age</label>
                <input {...register("age" ,{valueAsNumber:true})} type="text" id="lname" name="age"/>
            <button disabled={!isValid} type="submit" value="Submit">Submit</button>
        </form> 
    </div>
    </div>
  )
}

export default FormByFormHook