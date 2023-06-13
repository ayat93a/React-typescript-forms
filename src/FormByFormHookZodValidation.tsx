import React, { FormEvent } from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3 ),
    age : z.number({invalid_type_error: "Accept only Numbers !"}).min(18 )

})
type FormData = z.infer <typeof schema> ;
//npm i @hookform/resolvers
// to integrate zod with react hook
const FormByFormHookZodValidation
 = () => {

    const {register , handleSubmit , formState : {errors , isValid}} = useForm<FormData>({resolver : zodResolver(schema)})
    const handleRegistration  = (data : FieldValues ) =>{ 
      console.log(data)}
  return (
    <div>
              <h1>Form Hook with Zod</h1>
              <p>min length for name is 3 , age greater or equal to 18</p>

         <div>
        <form onSubmit={handleSubmit(handleRegistration)}>
            <label >First name</label>
                <input {...register("name" )} type="text" id="name" name="name"  />
                {errors.name && <p>{errors.name.message}</p>}
            <label >Age</label>
                <input {...register("age" , {valueAsNumber : true})} type="text" id="lname" name="age"/>
                {errors.age && <p>{errors.age.message}</p>}
            <button  type="submit" value="Submit">Submit</button>
        </form> 
    </div>
    </div>
  )
}

export default FormByFormHookZodValidation
